"use client";
import React, { useEffect, useState } from "react";
import { CTASectionT } from "@/typings";
import CTASection from "@/components/CTASection";
import { QRCodeSVG } from "qrcode.react";
interface QrCodeProps {
  title?: string,
  desc?: string
}

const QrCodeFleet = ({
  title,
  desc,
}: QrCodeProps) => {
  const CTAProps: CTASectionT = {
    isHero: true,
    title: title || "Escanea el QR con tu celular",
    desc: desc || "Descarga DiDi Pasajero escaneando el código con tu celular.",
    textColor: "white",
    bgColor: "bg-orange-primary",
    imageStyle: "z-10 m-4 w-100 rounded",
    btnMode: "hidden",
    btnType: "pax",
    reverse: true,
  };
  const [QRUrl, setQRUrl] = useState(
    "http://onelink.to/s88fxw"
  );
  const qr = (
    <QRCodeSVG
      value={QRUrl}
      size={300}
      height={300}
      width={300}
      bgColor="#ffffff"
      className="z-10 m-4 w-100"
    ></QRCodeSVG>
  );

  useEffect(() => {
    let url = new URL(window.location.href);
    let btnOneLink = new URL(
      document
        .getElementsByClassName("btn-hidden")?.[0]
        ?.getElementsByTagName("a")?.[0]?.href || ""
    );
    //? only af params
    let pid = url.searchParams.get("pid");
    let c = url.searchParams.get("c");
    let af_ad_id = url.searchParams.get("af_ad_id");
    let af_adset_id = url.searchParams.get("af_adset_id");
    let af_c_id = url.searchParams.get("af_c_id");
    let af_channel = url.searchParams.get("af_channel");
    let af_url = new URL(btnOneLink.origin + btnOneLink.pathname);
    af_url.searchParams.set("pid", pid as string);
    af_url.searchParams.set("c", c as string);
    af_url.searchParams.set("af_ad_id", af_ad_id as string);
    af_url.searchParams.set("af_adset_id", af_adset_id as string);
    af_url.searchParams.set("af_c_id", af_c_id as string);
    af_url.searchParams.set("af_channel", af_channel as string);

    setQRUrl(af_url.href);
  }, []);
  return (
    <>
      <CTASection imageRawRender={qr} {...CTAProps}></CTASection>
    </>
  );
};

export default QrCodeFleet;