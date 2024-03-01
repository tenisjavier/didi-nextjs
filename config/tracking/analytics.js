import gtmEvent from "./gtmEvent";

//? get cookie function
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

//? script for the btn params
export default function insertBtnParams() {
  window.localStorage.removeItem("gatsby-i18next-language");

  const countryCode =
    window.location.host !== "99app.com" &&
    window.location.host !== "stg.99app.com"
      ? window.location.pathname.split("/")[1]
      : "br";

  const thisDomain = countryCode === "br" ? "99app.com" : "didiglobal.com";

  var referrer = document.referrer;
  var gaReferral = {
    source: "(direct)",
    medium: "(none)",
    campaign: "none",
  };

  var referringDomain = getDomain_(referrer);

  //? search is the parameters complete string without ?
  var search = window.location.search.slice(1);

  //? if does not have utms or gclid should be organic traffic
  if (search.indexOf("utm") === -1 && search.indexOf("gclid") === -1) {
    if (
      thisDomain !== referringDomain &&
      !document.location.pathname.includes("store")
    ) {
      //this function return if it is SEO, direct or referral
      var referringInfo = parseGaReferrer(referrer);

      // organic source and medium

      gaReferral.source = referringInfo.source;
      gaReferral.medium = referringInfo.medium;
      search =
        "utm_source=" +
        gaReferral.source +
        "&utm_medium=" +
        gaReferral.medium +
        "&utm_campaign=" +
        gaReferral.campaign;

      localStorage.setItem("urlSearch", search);
    } else {
      search = localStorage.getItem("urlSearch") || "";
    }
  } else {
    localStorage.setItem("urlSearch", search);
  }

  //? GTM AB Landing if abtest
  const abPathname = decodeURIComponent(getCookie("abPathname"));
  if (abPathname === window.location.pathname) {
    const abName = getCookie("abName");
    const abVersion = getCookie("abVersion");
    gtmEvent("ab-landing", {
      version: abVersion,
      versionName: abName + "-" + abVersion,
    });
  }
  document.querySelectorAll("a").forEach(function (c) {
    let url = c.getAttribute("href");
    url = url + "?" + search;

    // if it is a deeplink, get the long url version with correct parameters
    if (
      url.indexOf("ssa-rides-driver.onelink.me/mbwy/") > -1 ||
      url.indexOf("https://page.didiglobal.com/global/silver-bullet-online/") >
        -1 ||
      url.indexOf("global-rides-passenger.onelink.me/xNlo/") > -1 ||
      url.indexOf("fleet.onelink.me/tLtr/") > -1 ||
      url.indexOf("fleet.onelink.me/jjQA/") > -1 ||
      url.indexOf("99.onelink.me/Mayr/") > -1 ||
      url.indexOf("onelink.me/IY6B/") > -1 ||
      url.indexOf("onelink.me/5xQ3/") > -1 ||
      url.indexOf("onelink.me/4B2F/") > -1 ||
      url.indexOf("onelink.me/zzaY/") > -1 ||
      url.indexOf("onelink.me/ixFb/") > -1 ||
      url.indexOf("onelink.me/k8Zv/") > -1 ||
      url.indexOf("onelink.me/Zkxc/") > -1
    ) {
      url = getDeepLink(new URL(url));
      c.setAttribute("href", url);
    }

    return url;
  });

  // function to get domain
  function getDomain_(url) {
    if (!url) return null;

    try {
      let parsedUrl = new URL(url);
      let hostname = parsedUrl.hostname;
      let parts = hostname.split(".");
      if (parts.length > 2) {
        return parts.slice(-2).join(".");
      } else {
        return hostname;
      }
    } catch (e) {
      console.error("Invalid URL:", e);
      return null;
    }
  }

  function parseGaReferrer(referrer) {
    var values = {};
    //? is referrer empty? then direct
    if (!referrer) {
      values.source = "(direct)";
      values.medium = "(none)";

      return values;
    }

    //?if not, is seo or web referral
    var searchEngines = {
      "yahoo.com": {
        p: "p",
        n: "yahoo",
      },
      "bing.com": {
        p: "q",
        n: "live",
      },
      "baidu.com": {
        p: "wd",
        n: "baidu",
      },
      "search.com": {
        p: "q",
        n: "search",
      },
      google: {
        p: "q",
        n: "google",
      },
    };
    var a = document.createElement("a");
    var searchEngine;

    a.href = referrer;

    //? Shim for the billion google search engines
    if (a.hostname.indexOf("google") > -1) {
      referringDomain = "google";
    }

    if (searchEngines[referringDomain]) {
      searchEngine = searchEngines[referringDomain];
      values.source = searchEngine.n;
      values.medium = "organic";
    } else if (referringDomain !== thisDomain) {
      values.source = referringDomain;
      values.medium = "referral";
    }

    return values;
  }

  //? @desc: function to create a deeplink long url with the correct channel text for download and channelId for H5
  //? @return: return the one link url
  function getDeepLink(url) {
    const channels = {
      "(none)": 14,
      referral: 17,
      organic: 19,
      email: 20,
    };

    const channelsText = {
      "(none)": "website_direct",
      referral: "website_referral",
      organic: "website_seo",
      email: "website_email",
    };

    const countriesLanguage = {
      cl: ["CL", "es-CL"],
      br: ["BR", "pt-BR"],
      ar: ["AR", "es-AR"],
      pe: ["PE", "es-PE"],
      mx: ["MX", "es-MX"],
      ec: ["EC", "es-EC"],
      co: ["CO", "es-CO"],
      do: ["DO", "es-DO"],
      cr: ["CR", "es-CR"],
      pa: ["PA", "es-PA"],
      kz: ["KZ", "kk-KZ"],
      au: ["AU", "en-AU"],
      nz: ["NZ", "en-NZ"],
      eg: ["EG", "ar-EG"],
      za: ["ZA", "en-ZA"],
    };

    let newUrl = new URL(url.origin + url.pathname.slice(0, 5)); // without any params for now
    if (url.pathname.includes("silver-bullet-online"))
      newUrl = new URL(url.origin + url.pathname);
    // set correct parameters for onelink

    let pid = url.searchParams.get("pid");
    let utmSource = url.searchParams.get("utm_source");
    let source = url.searchParams.get("source");
    let utmMedium = url.searchParams.get("utm_medium");
    let c = url.searchParams.get("utm_campaign");
    let campaign = url.searchParams.get("campaign");
    let term = url.searchParams.get("utm_term");
    let campaignId = url.searchParams.get("campaign_id");
    let adgroupId = url.searchParams.get("ad_group_id");
    let creativeId = url.searchParams.get("creative_id");
    let targetId = url.searchParams.get("target_id");
    let keyword = url.searchParams.get("keyword");
    let matchtype = url.searchParams.get("matchtype");
    let deviceModel = url.searchParams.get("devicemodel");
    let adPosition = url.searchParams.get("adposition");
    let placement = url.searchParams.get("placement");
    let channel = url.searchParams.get("channel");
    let country = countryCode.toUpperCase();
    let fromEnd = "h5";

    let af_c_id = url.searchParams.get("af_c_id");
    let af_channel = url.searchParams.get("af_channel");
    let af_adset_id = url.searchParams.get("af_adset_id");
    let af_ad_id = url.searchParams.get("af_ad_id");
    let form_url =
      "https://page.didiglobal.com/driver-page/register/index.html";

    let channelId;
    if (channel) {
      channelId = channel;
      if (utmSource) {
        pid = utmSource ? utmSource : "website_direct";
      } else {
        pid = source ? source : "website_direct";
      }
    }

    if (!pid) {
      channelId = channels[utmMedium] ? channels[utmMedium] : 14;
      pid = channelsText[utmMedium]
        ? channelsText[utmMedium]
        : "website_direct";
    }

    //? if is SEO, Direct or Web Referral -> Attricampaign will be the pathname

    if (
      channelId === 14 ||
      channelId === "website_direct" ||
      channelId === 17 ||
      channelId === "website_referral" ||
      channelId === 19 ||
      channelId === "website_seo"
    ) {
      campaign = "refpage_" + window.location.pathname;
      c = "refpage_" + window.location.pathname;
      campaignId = "refpage_" + window.location.pathname;

      //? EXPERIMENT A/B other code in Layout
      const abName = getCookie("abName");
      const abVersion = getCookie("abVersion");

      if (abName && abVersion) {
        const test_version = getCookie("abName") + "-" + getCookie("abVersion");
        adgroupId = test_version;
      }
    }

    //? if referral? save referral source
    if (
      channelId === 17 &&
      (referringDomain === "" ||
        referringDomain.indexOf("didi") > -1 ||
        referringDomain.indexOf("99") > -1)
    ) {
      channelId = 19;
      pid = "website_seo";
    }
    if (channelId === 17 || channelId === "website_referral") {
      campaign = referringDomain;
      c = referringDomain;
    }
    let countryLang = countriesLanguage[countryCode] || ["MX", "es-MX"];
    newUrl.searchParams.set("location_country", countryLang[0]);
    newUrl.searchParams.set("country", country);
    newUrl.searchParams.set("lang", countryLang[1]);
    newUrl.searchParams.set("channel", channelId);
    newUrl.searchParams.set("pid", pid);
    newUrl.searchParams.set("af_adset_id", af_adset_id);
    newUrl.searchParams.set("af_ad_id", af_ad_id);
    newUrl.searchParams.set("af_c_id", af_c_id);
    newUrl.searchParams.set("af_channel", af_channel);
    newUrl.searchParams.set("c", c);
    newUrl.searchParams.set("campaign", campaign);
    newUrl.searchParams.set("utm_medium", utmMedium);
    newUrl.searchParams.set("utm_source", utmSource);
    newUrl.searchParams.set("utm_campaign", c);
    newUrl.searchParams.set("utm_term", term);
    newUrl.searchParams.set("source", source);
    newUrl.searchParams.set("campaign_id", campaignId);
    newUrl.searchParams.set("ad_group_id", adgroupId);
    newUrl.searchParams.set("creative_id", creativeId);
    newUrl.searchParams.set("target_id", targetId);
    newUrl.searchParams.set("keyword", keyword);
    newUrl.searchParams.set("matchtype", matchtype);
    newUrl.searchParams.set("devicemodel", deviceModel);
    newUrl.searchParams.set("adposition", adPosition);
    newUrl.searchParams.set("placement", placement);
    newUrl.searchParams.set("clientType", channelId);
    newUrl.searchParams.set("from_end", fromEnd);

    if (
      url.href.indexOf("me/mbwy/") > -1 ||
      url.href.indexOf("me/o97G/") > -1 ||
      url.href.indexOf("me/ixFb/") > -1 ||
      url.href.indexOf("me/IY6B/") > -1 ||
      url.href.indexOf("me/k8Zv/") > -1 ||
      url.href.indexOf("me/5xQ3/") > -1 ||
      url.href.indexOf("page.didiglobal.com/driver-page/register") > -1
    ) {
      if (window.location.href.indexOf("/mx/prestamos") !== -1) {
        newUrl.searchParams.set(
          "af_web_dp",
          `${document.location.origin}/${countryCode}/prestamos/store-prestamos/`
        );
        return newUrl.href;
      }
      newUrl.searchParams.set("af_r", form_url);
      if (document.getElementById("h5"))
        document.getElementById("h5").src = form_url + newUrl.search;
      return newUrl.href;
    } else if (url.href.indexOf("me/zzaY/") > -1) {
      newUrl.searchParams.set(
        "af_r",
        `https://www.didi-food.com/${countryLang[1]}/mobile-delivery/guide/`
      );

      return newUrl.href;
    } else if (
      url.href.indexOf("fleet.onelink.me/tLtr/") > -1 ||
      url.href.indexOf("fleet.onelink.me/jjQA/") > -1
    ) {
      newUrl.searchParams.set(
        "af_web_dp",
        `${document.location.origin}/${countryCode}/didi-fleet/store/`
      );
      return newUrl.href;
    } else if (url.href.indexOf("onelink.me/Zkxc/") > -1) {
      newUrl.searchParams.set(
        "af_web_dp",
        `${document.location.origin}/${countryCode}/store-pay/`
      );
      return newUrl.href;
    } else if (url.href.indexOf("global-food-eater.onelink.me/4B2F/") > -1) {
      newUrl.searchParams.set(
        "af_web_dp",
        `${document.location.origin}/${countryCode}/food/store-food-app`
      );
      return newUrl.href;
    } else {
      newUrl.searchParams.set("af_web_dp", `${document.location.origin}/store`);
      if (countryCode) {
        newUrl.searchParams.set(
          "af_web_dp",
          `${document.location.origin}/${countryCode}/store`
        );
      }
      return newUrl.href;
    }
  }
}
