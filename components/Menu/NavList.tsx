import React from "react";
import NavItem from "./NavItem";
import { SingleMenuItem } from "@/config/menu/menu-config";
import { CountryCode } from "@/typings";

interface NavListProps {
  links: SingleMenuItem[];
  countryCode: CountryCode;
  handleMenuClick: () => void;
}

const NavList = ({ links, countryCode, handleMenuClick }: NavListProps) => {
  return (
    <>
      {links &&
        links?.map((link, index) => (
          <NavItem
            key={index}
            link={link}
            countryCode={countryCode}
            handleMenuClick={handleMenuClick}
          ></NavItem>
        ))}
    </>
  );
};

export default NavList;
