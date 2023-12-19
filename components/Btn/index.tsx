"use client";
import React, { useState } from "react";
import { getBtnLinks } from "@/config/btn/btn-config";
import gtmEvent from "@/config/tracking/gtm";
import { FaSpinner } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { getCountryCode } from "@/utils/country";

//? @desc:  CTA buttons.  If not btnType is passed it will be a normal btn.
//* @props: btnType drv/pax/none | btnLink (normal btn) "url" | btnMode light/none | children: normal btn text

export type BtnType =
  | "both"
  | "drv"
  | "drvWhatsapp"
  | "pax"
  | "fleet"
  | "pay"
  | "payBusiness"
  | "foodBusiness"
  | "foodDelivery"
  | "foodEater"
  | "foodEaterOnline"
  | "custom"
  | "bothFood"
  | "prestamos"
  | "bothPrestamos"
  | "entrega"
  | "entregaBusiness"
  | "en"
  | "card";

export type BtnMode =
  | "primary"
  | "dark"
  | "light"
  | "green"
  | "hidden"
  | "whatsapp"
  | "static";

export interface BtnProps {
  btnType: BtnType;
  btnText2?: string;
  btnLink2?: string;
  btnMode: BtnMode;
  btnModeSecondary?: BtnMode;
  btnLink?: string;
  btnText?: string;
  notRedirectOutPage?: boolean;
  download?: boolean;
  btnTextCenter?: boolean;
}
const Btn = ({
  btnType,
  btnMode,
  btnLink,
  btnText,
  btnModeSecondary,
  btnText2,
  btnLink2,
  notRedirectOutPage,
  download,
  btnTextCenter,
}: BtnProps) => {
  const countryCode = getCountryCode(usePathname());
  const btnData = getBtnLinks(countryCode);
  const [isLoading, setIsLoading] = useState(false);

  if (btnType === "drv") {
    btnLink = btnData.drvLink;
    btnText = btnText || btnData.drvText;
  } else if (btnType === "drvWhatsapp") {
    btnLink = btnData.drvWhatsappLink;
    btnText = btnText || btnData.drvWhatsappText;
  } else if (btnType === "pax") {
    btnLink = btnData.paxLink;
    btnText = btnText || btnData.paxText;
  } else if (btnType === "fleet") {
    btnLink = btnData.fleetLink;
    btnText = btnText || btnData.fleetText;
  } else if (btnType === "pay") {
    btnLink = btnData.payLink;
    btnText = btnText || btnData.payText;
  } else if (btnType === "payBusiness") {
    btnLink = btnData.payBusinessLink;
    btnText = btnText || btnData.payBusinessText;
  } else if (btnType === "foodBusiness") {
    btnLink = btnData.foodBusinessLink;
    btnText = btnText || btnData.foodBusinessText;
  } else if (btnType === "foodDelivery") {
    btnLink = btnData.foodDeliveryLink;
    btnText = btnText || btnData.foodDeliveryText;
  } else if (btnType === "foodEater") {
    btnLink = btnData.foodEaterLink;
    btnText = btnText || btnData.foodEaterText;
  } else if (btnType === "foodEaterOnline") {
    btnLink = btnData.foodEaterOnlineLink;
    btnText = btnText || btnData.foodEaterOnlineText;
  } else if (btnType === "prestamos") {
    btnLink = btnData.prestamosLink;
    btnText = btnText || btnData.prestamosText;
  } else if (btnType === "entrega") {
    btnLink = btnData.entregaLink;
    btnText = btnText || btnData.entregaText;
  } else if (btnType === "en") {
    btnLink = btnData.paxLink;
    btnText = btnText || btnData.paxText;
  } else if (btnType === "card") {
    btnText = btnText || btnData.creditText;
    btnLink = btnLink || btnData.creditLink;
  }

  // const handleClick = (e: any) => {
  //   if (btnMode === "static") return;
  //   if (notRedirectOutPage) {
  //     if (download) {
  //       setIsLoading(true);
  //       setTimeout(() => {
  //         setIsLoading(false);
  //       }, 500);
  //     }
  //     return;
  //   }
  //   e.preventDefault();
  //   const link = e.target.href;
  //   let form;
  //   const url = new URL(link);
  //   let version = url.searchParams.get("ad_group_id")?.toString();
  //   if (url.searchParams.get("c")?.toString().includes("/food"))
  //     version = localStorage.getItem("t6")?.toString();
  //   if (btnType === "drv")
  //     form = link.includes("quickbolt") ? "quickbolt" : "h5";
  //   gtmEvent(`click-btn`, {
  //     btnType: btnType,
  //     btnLink: link,
  //     form: form,
  //     versionName: version,
  //     btnText: e.target.innerText,
  //     countryCode: countryCode,
  //   });
  //   window.location.href = link;
  // };

  return (
    <>
      <div
        tabIndex={0}
        role="button"
        className={`${
          btnTextCenter ? "text-center" : ""
        } p-0 text-lg md:text-base my-2 btn-${btnMode} btn-${btnModeSecondary}`}
      >
        {isLoading ? (
          <FaSpinner className="animate-spin px-8 py-3.5"></FaSpinner>
        ) : (
          <a
            // onClick={(e) => handleClick(e)}
            className={`block px-8 py-3 ${isLoading && ""} `}
            href={btnLink || btnLink2}
            target={`${notRedirectOutPage ? "_blank" : ""}`}
            download={download}
          >
            {btnText || btnText2}
          </a>
        )}
      </div>
    </>
  );
};

export default Btn;
