import React from "react";
import NavLogo from "@/components/Header/NavLogo";
import MenuCountryFlags from "@/components/MenuCountryFlags";
import Menu from "@/components/Menu";
import Breadcrumb from "@/components/Header/Breadcrumb";
import { CountryCode, BusinessType } from "@/typings";

interface HeaderProps {
  countryCode: CountryCode;
  businessType: BusinessType;
}

const Header = ({ countryCode, businessType }: HeaderProps) => {
  return (
    <>
      <nav className="fixed z-40 h-14 w-full shadow-sm  shadow-orange-primary bg-white ">
        <div className="flex h-full items-center justify-between">
          <NavLogo countryCode={countryCode} businessType={businessType} />
          <div className="flex gap-1 items-center h-full">
            <MenuCountryFlags countryCode={countryCode} />
            <Menu countryCode={countryCode} businessType={businessType} />
          </div>
        </div>
      </nav>
      <Breadcrumb countryCode={countryCode}></Breadcrumb>
    </>
  );
};

export default Header;
