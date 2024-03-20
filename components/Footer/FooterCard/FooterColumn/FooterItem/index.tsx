import React from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import textHighlighter from "@/utils/textHighlighter";

export type iconsType = "facebook" | "instagram" | "tiktok" | "twitter";

interface FooterLinkProps {
  text?: string;
  link?: string;
  icon?: iconsType;
}

const icons = {
  facebook: <FaFacebook className="text-2xl" />,
  instagram: <FaInstagram className="text-2xl" />,
  tiktok: <FaTiktok className="text-2xl" />,
  twitter: <FaTwitter className="text-2xl" />,
}

const FooterItem: React.FC<FooterLinkProps> = ({ text, link, icon }) => {
  return (
    <>
      {link ? (
        <Link className="w-fit underline underline-offset-8" href={link}>
          {icon ? (
            <>
              {icons[icon]}
            </>
          ) : (
            <>
              {text}
              <FiArrowUpRight className="w-6" />
            </>
          )}
        </Link>
      ) : (
        <>
          {text && (
            <p>
              {textHighlighter({
                text,
                style: 'text-white block font-bold'
              })}
            </p>
          )}
        </>
      )}
    </>
  );
};

export default FooterItem;
