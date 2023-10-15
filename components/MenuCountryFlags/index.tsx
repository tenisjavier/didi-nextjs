"use client";
import React, { useState } from "react";
import { menuFlagsCountry } from "@/config/menu/menu-config";
import NavList from "@/components/MenuCountryFlags/NavList";
import Image from "next/image";
import { CountryCode } from "@/typings";

interface MenuCountryFlagsProps {
  countryCode: CountryCode;
}

const MenuCountryFlags = ({ countryCode }: MenuCountryFlagsProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const currentCountry = menuFlagsCountry.find(
    (item) => item.text.toLocaleLowerCase() === countryCode
  );
  return (
    <div className="flex h-full items-center lg:hidden ">
      {currentCountry && (
        <div
          className={`${
            menuOpen ? "w-20 p-3" : "w-10 p-2"
          } h-10 rounded-full bg-gray-200 
            flex items-center cursor-pointer 
            relative transition-all duration-300`}
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <Image
            alt={currentCountry.text}
            src={currentCountry.icon}
            className="w-6"
            width={24}
            height={24}
          />
          <p
            className={`absolute top-0 right-4 mt-2 transform ${
              menuOpen ? "translate-x-0 opacity-100" : "translate-x-2 opacity-0"
            } transition-all duration-300`}
          >
            {currentCountry.text}
          </p>
        </div>
      )}
      <div
        className={`${
          menuOpen ? "fixed" : "hidden"
        } w-screen h-screen left-0 top-14 transition-opacity duration-300`}
        style={{ background: "rgba(0, 0, 0, 0.6)" }}
      >
        <div
          className={
            "menu-content w-auto h-fit fixed top-20 right-[50px] bottom-0 flex justify-center"
          }
        >
          <ul
            className={`rounded-2xl m-0 p-2 flex flex-col items-center bg-white gap-4 ${
              menuOpen
                ? "opacity-100 translate-y-0 animate-fadeIn"
                : "opacity-0 -translate-y-2 animate-fadeOut"
            }`}
          >
            <NavList links={menuFlagsCountry} countryCode={countryCode} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuCountryFlags;
