"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { getBtnLinks } from "@/config/btn/btn-config";
import Btn, { BtnProps } from "@/components/Btn";
import { CountryCode } from "@/typings";

interface SmartBannerProps extends BtnProps {
  type:
    | "both"
    | "drv"
    | "drvWhatsapp"
    | "pax"
    | "fleet"
    | "payment"
    | "foodBusiness"
    | "foodDelivery"
    | "foodEater"
    | "card"
    | "en";
  title?: string;
  desc?: string;
  countryCode: CountryCode;
  bgColor: string;
  textColor: string;
}

const SmartBanner = (props: SmartBannerProps) => {
  const {
    type,
    title,
    desc,
    btnType,
    btnMode,
    btnText,
    btnLink,
    countryCode,
    bgColor,
    textColor,
  } = props;
  const btnData = getBtnLinks(countryCode);
  let Logo;

  if (type === "drv" || type === "drvWhatsapp") {
    Logo = <DrvLogo></DrvLogo>;
  } else if (type === "pax") {
    Logo = <PaxLogo></PaxLogo>;
  } else if (type === "fleet" && btnData.fleetText) {
    Logo = <DiDiFleet></DiDiFleet>;
  } else if (type === "payment" && btnData.payText) {
    Logo = <DiDiPay></DiDiPay>;
  } else if (type === "foodEater") {
    Logo = <FoodEaterLogo></FoodEaterLogo>;
  } else if (type === "foodBusiness") {
    Logo = <FoodEaterLogo></FoodEaterLogo>;
  } else if (type === "foodDelivery") {
    Logo = <FoodEaterLogo></FoodEaterLogo>;
  } else if (type === "en") {
    Logo = <PaxLogo></PaxLogo>;
  } else if (type === "card") {
    Logo = <PaxLogo></PaxLogo>;
  }

  //? If users scrolls under H1 Hero SB is activated
  useEffect(() => {
    const sb = document.querySelector('[data-id="sb"]');
    const h1 = document.querySelector("h1");
    const observer = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) sb?.classList.add("animate-fadeIn");

      if (entries[0].isIntersecting) sb?.classList.remove("animate-fadeIn");
    });

    if (h1) observer.observe(h1);
  }, []);

  return (
    <div
      className={`opacity-0 fixed bottom-0 z-50 h-auto w-full lg:hidden ${
        bgColor && bgColor
      } ${textColor && textColor}`}
      data-id="sb"
    >
      <div className="flex h-full items-center justify-between p-2">
        <span className="flex">{Logo}</span>
        <span className="ml-2">
          <p className="font-bold leading-3">{title}</p>
          <p className="leading-4">{desc}</p>
        </span>
        <Btn
          btnText={btnText?.replace(/ .*/, "")}
          btnMode={btnMode}
          btnType={btnType}
          btnLink={btnLink}
        ></Btn>
      </div>
    </div>
  );
};
const PaxLogo = () => {
  return (
    <div>
      <Image
        src="/images/logos/pax-logo.png"
        alt="didi pasajero logo"
        className="w-12 h-auto"
        width={50}
        height={50}
      />
    </div>
  );
};

const DrvLogo = () => {
  return (
    <div className="p-3">
      <Image
        src="/images/logos/drv-logo.png"
        alt="didi conductor logo"
        className="w-12 h-auto"
        width={50}
        height={50}
      />
    </div>
  );
};
const DiDiFleet = () => {
  return (
    <div className="p-3">
      <Image
        src="../images/didi-fleet-logo.png"
        alt="didi fleet logo"
        className=""
        width={50}
        height={50}
      />
    </div>
  );
};

const DiDiPay = () => {
  return (
    <div className="p-3">
      <Image
        src="../images/drv-logo.png"
        alt="didi pay logo"
        className=""
        width={50}
        height={50}
      />
    </div>
  );
};

const FoodEaterLogo = () => {
  return (
    <div className="p-3">
      <Image
        src="../images/didi-food-eater-logo.png"
        alt="didi eater logo"
        className=""
        width={50}
        height={50}
      />
    </div>
  );
};

/*const FoodBusinessLogo = () => {
  return (
    <div className="p-3">
      <Image src="../images/didi-food-business-logo.png" alt="didi business logo" className="" width={50} />
    </div>
  );
};*/

/*const FoodDeliveryLogo = () => {
  return (
    <div className="p-3">
      <Image src="../images/didi-food-delivery-logo.png" alt="didi delivery logo" className="" width={50} />
    </div>
  );
};*/

export default SmartBanner;
