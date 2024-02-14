import React from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
// import textHighlighter from "@/util/textHighlighter";
import Link from "next/link";

export type iconsType = "facebook" | "instagram" | "tiktok" | "twitter";

interface FooterLinkProps {
  text?: string;
  link?: string;
  icon?: iconsType;
}

const FooterItem: React.FC<FooterLinkProps> = ({ text, link, icon }) => {
  return (
    <>
      {link ? (
        <Link className="w-fit underline underline-offset-8" href={link}>
          {icon ? (
            <>
              <FaFacebook className="text-2xl" />
              <FaInstagram className="text-2xl" />
              <FaTiktok className="text-2xl" />
              <FaTwitter className="text-2xl" />
            </>
          ) : (
            <>
              {text}
              {/* <Image imageStyle="w-6" src="/icon/icon-arrow-link.svg" imageData={{
                title: 'DiDi Credit',
                description: 'DiDi Credit',
              }} /> */}
            </>
          )}
        </Link>
      ) : (
        // <p>{textHighlighter(text, 'text-white block font-bold')}</p>
        <p>{text}</p>
      )}
    </>
  );
};

export default FooterItem;
