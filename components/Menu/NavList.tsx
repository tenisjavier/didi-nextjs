import React, { useMemo } from "react";
import NavItem from "./NavItem";
import { SingleMenuItem } from "@/config/menu/menu-config";
import { CountryCode } from "@/typings";

interface NavListProps {
  links: SingleMenuItem[];
  countryCode: CountryCode;
}

const NavList = ({ links, countryCode }: NavListProps) => {
  return (
    <>
      {links &&
        useMemo(() => {
          return links.map((link, index) => (
            <NavItem
              key={index}
              link={link}
              countryCode={countryCode}
            ></NavItem>
          ));
        }, [links])}
    </>
  );
};

export default NavList;
