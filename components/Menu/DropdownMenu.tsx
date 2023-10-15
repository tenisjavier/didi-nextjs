import React from "react";
import { SingleDropMenuItem } from "@/config/menu/menu-config";
import { CountryCode } from "@/typings";
import DropdownItem from "./DropdownItem";

interface DropdownMenuProps {
  links: SingleDropMenuItem[];
  countryCode: CountryCode;
  isDropdownOpen: boolean;
}

const DropdownMenu = ({
  links,
  countryCode,
  isDropdownOpen,
}: DropdownMenuProps) => {
  return (
    <div
      className={`${
        isDropdownOpen ? "block" : "hidden"
      } xl:bg-[#f2f2f2] bg-[#EDECEC] top-14 w-full lg:group-hover:block lg:hidden lg:absolute lg:w-80 transition-all`}
    >
      {links.map((link, index) => (
        <DropdownItem
          key={index}
          url={link.url}
          text={link.text}
          countryCode={countryCode}
        />
      ))}
    </div>
  );
};

export default DropdownMenu;
