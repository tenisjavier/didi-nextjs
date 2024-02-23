import { FaCarSide } from "react-icons/fa";
import React from "react";
import textBreak from "@/utils/textBreak";

interface SectionBulletsProps {
  bullets?: string[] | JSX.Element[];
  textDir: string;
  margin: string;
  customBulletIcon?: boolean;
  icon?: any;
}

const SectionBullets = ({
  bullets,
  customBulletIcon,
  textDir,
  margin,
  icon,
}: SectionBulletsProps) => {
  return (
    <ul
      className={`p-0 lg:pl-12 mt-8 mb-6 list-none ${textDir} text-xl flex flex-col gap-3`}
    >
      {bullets?.map((item, index) => (
        <li key={index} className="flex">
          {!customBulletIcon ? (
            <div className={`mt-1 ${margin} text-orange-primary w-6`}>
              <FaCarSide size={22} />
            </div>
          ) : (
            icon && icon
          )}
          <div className="inline-block">
            {typeof item === "string"
              ? (
                <p className="mt-0 mb-5 text-xl" key={index}>
                  {textBreak(item)}
                </p>
              )
              : item}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SectionBullets;
