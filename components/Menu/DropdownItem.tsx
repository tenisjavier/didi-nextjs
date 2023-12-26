import React from "react";
import Link from "next/link";
import { CountryCode } from "@/typings";
import gtmEvent from "@/config/tracking/gtm";

interface DropdownItemProps {
  url: string;
  text: string;
  countryCode: CountryCode;
}

const DropdownItem = ({ url, text, countryCode }: DropdownItemProps) => {
  const isCTA = url?.includes("onelink");

  const handleItemClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    countryCode: CountryCode
  ) => {
    // e.preventDefault();
    // const link = e.target.href;
    // const form = link.includes("quickbolt") ? "quickbolt" : "h5";
    // gtmEvent(`click-btn`, {
    //   btnType: "menu-link",
    //   btnLink: link,
    //   form: form,
    //   btnText: e.target.innerText,
    //   countryCode: countryCode,
    // });
    // navigate(link);
  };

  return (
    <Link
      className="flex h-12 w-full pl-[35%] lg:pl-6 items-center hover:bg-[#d9d9d9] transition-all"
      href={url}
      onClick={isCTA ? (e): void => handleItemClick(e, countryCode) : undefined}
    >
      {text}
    </Link>
  );
};

export default DropdownItem;
