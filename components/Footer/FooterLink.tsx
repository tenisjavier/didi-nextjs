import React from "react";
import { getFooterLinks } from "@/config/footer/footer-config";
import { FooterLinks } from "@/config/footer/footer-config";
import { getFooterLinksFood } from "@/config/footer/footer-food-config";
import { CountryCode, BusinessType } from "@/typings";

interface FooterLinkProps {
  countryCode: CountryCode;
  businessType: BusinessType;
}

const FooterLink = ({ countryCode, businessType }: FooterLinkProps) => {
  let links;
  if (businessType === "mobility" || businessType === "pay") links = getFooterLinks(countryCode);
  if (businessType === "food") links = getFooterLinksFood(countryCode);

  return (
    <div className="flex h-full flex-wrap bg-gray-primary">
      <div className="Lg:flex-row bg-grey-primary hidden lg:flex w-full lg:flex-initial">
        {links &&
          links.map((link: FooterLinks, index: number) => (
            <div
              key={index}
              className="flex flex-auto items-center justify-center text-lg"
            >
              <a href={link.link} className="hover:text-white hover:opacity-70">
                {link.text}
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FooterLink;
