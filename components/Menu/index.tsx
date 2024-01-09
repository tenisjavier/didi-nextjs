"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { getMenuLinks, SingleMenuItem } from "@/config/menu/menu-config";
import { getMenuLinksFood } from "@/config/menu/menu-food-config";
import { getMenuLinksPay } from "@/config/menu/menu-pay-config";
import { getMenuLinksCard } from "@/config/menu/menu-card-config";
import { CountryCode } from "@/typings";
import { BusinessType } from "@/typings";
import NavList from "@/components/Menu/NavList";

interface MenuProps {
  countryCode: CountryCode;
  businessType: BusinessType;
}

const Menu = ({ countryCode, businessType }: MenuProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuLinks: SingleMenuItem[] = getMenuLinks(countryCode);
  const menuLinksFood: SingleMenuItem[] = getMenuLinksFood(countryCode);
  const menuLinksPay: SingleMenuItem[] = getMenuLinksPay(countryCode);
  const menuLinksCard: SingleMenuItem[] = getMenuLinksCard(countryCode);
  // the journey menu: const menuLinksPr: SingleMenuItem[] = getMenuLinksPr(countryCode);

  let links = menuLinks;
  if (businessType === "food") links = menuLinksFood;
  if (businessType === "pay") links = menuLinksPay;
  if (businessType === "card") links = menuLinksCard;

  const handleSize = () => {
    if (window.innerWidth > 1024 && menuOpen) {
      setMenuOpen(false);
    }
  };

  window.addEventListener("resize", handleSize);

  return (
    <div className="flex h-full items-center">
      <FiMenu
        className="m-4 cursor-pointer text-gray-primary lg:hidden w-6 "
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
        size={25}
      ></FiMenu>
      <div
        className={
          "w-full h-auto lg:h-full " +
          (menuOpen
            ? "fixed left-0 top-14 right-0 bottom-0 overflow-y-scroll lg:absolute  bg-white "
            : "hidden ") +
          "lg:block"
        }
      >
        <ul
          className={`${
            menuOpen && "min-h-[100vh] pb-20"
          } m-0 p-0 flex flex-col items-center border-x-0 border-b-0  border-t border-solid border-orange-primary xl:bg-white bg-[#F2F2F2] lg:h-full lg:flex-row lg:border-0 lg:bg-transparent lg:px-5 gap-4`}
        >
          <NavList links={links} countryCode={countryCode} />
        </ul>
      </div>
    </div>
  );
};

export default Menu;
