import React, { useMemo, useState } from "react";
import NavItem from "./NavItem";
import { SingleMenuItem } from "@/config/menu/menu-config";

interface NavListProps {
  links: SingleMenuItem[];
  countryCode: any;
}

const NavList = ({ links, countryCode }: NavListProps) => {
  return (
    <>
      {links &&
        useMemo(() => {
          return links.map((menuLink, index) => (
            <NavItem
              key={index}
              link={menuLink}
              isSelected={menuLink.text.toLocaleLowerCase() === countryCode}
            />
          ));
        }, [links])}
    </>
  );
};

export default NavList;
