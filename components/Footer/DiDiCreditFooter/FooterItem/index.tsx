import React from "react";
import { faFacebook, faInstagram, faTiktok, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import textHighlighter from "@/util/textHighlighter";
import Link from "next/link";
import Image from "next/image";


export type iconsType = "facebook" | "instagram" | "tiktok" | "twitter";

interface FooterLinkProps {
  text?: string;
  link?: string;
  icon?: iconsType
}

const FooterItem: React.FC<FooterLinkProps> = ({ text, link, icon }) => {
  const icons = {
    facebook: faFacebook,
    instagram: faInstagram,
    tiktok: faTiktok,
    twitter: faTwitter,
  }
  return (
    <>
      {link ? (
        <Link className="w-fit underline underline-offset-8" href={link}>
          {icon ? (
            <FontAwesomeIcon className="text-2xl" icon={icons[icon]} />
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
}

export default FooterItem;