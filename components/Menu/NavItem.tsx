import React, { memo, useState } from "react";
import Link from "next/link";
import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";
import Image from "next/image";
import DropdownMenu from "@/components/Menu/DropdownMenu";
import { CountryCode } from "@/typings";

interface NavItemProps {
  link: any;
  countryCode: CountryCode;
}

const NavItem = ({ link, countryCode }: NavItemProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { text, url, icon, dropMenu } = link;

  const handleNavItemClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <li
      className={`list-none group h-full flex flex-col w-full text-gray-primary
      lg:w-auto xl:p-2 justify-center lg:p-0 gap-2.5`}
    >
      <Link
        href={url}
        className="hover:text-orange-primary break-keep flex items-center justify-between w-full px-7 py-3 lg:px-0 cursor-pointer"
        onClick={handleNavItemClick}
      >
        <div className="flex items-center gap-2.5 whitespace-nowrap">
          {icon && (
            <Image
              src={`/images/menuIcons/${icon}.png`}
              alt={icon}
              width={20}
              height={20}
            />
          )}
          <span className="font-medium transition-all">{text}</span>
        </div>
        {dropMenu &&
          (isDropdownOpen ? (
            <AiOutlineDown className="lg:hidden text-orange-primary xl:text-3xl cursor-pointer"></AiOutlineDown>
          ) : (
            <AiOutlineRight className="lg:hidden text-orange-primary xl:text-3xl cursor-pointer"></AiOutlineRight>
          ))}
      </Link>
      {link.dropMenu && (
        <DropdownMenu
          links={link.dropMenu}
          isDropdownOpen={isDropdownOpen}
          countryCode={countryCode}
        />
      )}
    </li>
  );
};

export default memo(NavItem);
