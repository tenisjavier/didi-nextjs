import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CountryCode } from "@/typings";
import { BusinessType } from "@/typings";

interface NavLogoProps {
  countryCode: CountryCode;
  businessType: BusinessType;
}

const NavLogo = ({ countryCode, businessType }: NavLogoProps) => {
  let logoLink = `/${countryCode}/`;

  let logoImg = (
    <Image
      src="/images/logos/didi-logo.png"
      alt="DiDi Logo"
      width={80}
      height={25}
      priority={true}
    />
  );
  if (businessType === "food") {
    logoImg = (
      <Image
        src="/images/logos/didi-food-logo.png"
        alt="DiDi Food Logo"
        width={120}
        height={27}
        priority={true}
      />
    );
    logoLink = `/${countryCode}/food/`;
  }
  if (businessType === "food" && countryCode === "co")
    logoImg = (
      <Image
        src="/images/logos/didi-food-logo-colombia.png"
        alt="DiDi Food Logo Colombia"
        width={120}
        height={27}
        priority={true}
      />
    );

  if (businessType === "pay") {
    logoImg = (
      <Image
        src="/images/logos/didi-pay-logo.png"
        alt="DiDi Pay Logo"
        width={120}
        height={27}
        priority={true}
      />
    );
    logoLink = `/${countryCode}/didipay/`;
  }

  if (businessType === "card") {
    logoImg = (
      <Image
        src="/images/logos/didi-logo-card.png"
        alt="DiDi Card"
        width={120}
        height={27}
        priority={true}
      />
    );
    logoLink = `/${countryCode}/tarjeta-de-credito/`;
  }

  return (
    <div className="pl-4">
      <Link className="" href={logoLink}>
        {logoImg}
      </Link>
    </div>
  );
};

export default NavLogo;
