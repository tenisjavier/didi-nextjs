import React from "react";
import Link from "next/link";
import { CountryCode } from "@/typings";

interface DropdownItemProps {
  url: string;
  text: string;
  countryCode: CountryCode;
  handleMenuClick: () => void;
}

const DropdownItem = ({
  url,
  text,
  countryCode,
  handleMenuClick,
}: DropdownItemProps) => {

  const isInternalPages = url.startsWith('/')

  return (
    <>
      {isInternalPages ? (
        <Link
          className="flex h-12 w-full pl-[35%] lg:pl-6 items-center hover:bg-[#d9d9d9] transition-all"
          href={url}
          onClick={() => handleMenuClick()} //{isCTA ? (e): void => handleItemClick(e, countryCode) : undefined}
        >
          {text}
        </Link>
      ) : (
        <a
          className="flex h-12 w-full pl-[35%] lg:pl-6 items-center hover:bg-[#d9d9d9] transition-all"
          href={url}
          onClick={() => handleMenuClick()} //{isCTA ? (e): void => handleItemClick(e, countryCode) : undefined}
        >
          {text}
        </a>
      )}
    </>

  );
};

export default DropdownItem;
