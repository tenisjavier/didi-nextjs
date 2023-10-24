import { FaCarSide } from "react-icons/fa";
import React from "react";
import textHighlighter from "@/utils/textHighlighter";

interface SectionBulletsProps {
  bullets?: string[] | JSX.Element[];
  textDir: string;
  margin: string;
  customBulletIcon?: boolean;
  icon?: any;
  hasTextHighlighter?: boolean;
  textHighlighterStyle?: string;
}

const SectionBullets = ({
  bullets,
  customBulletIcon,
  textDir,
  margin,
  icon,
  hasTextHighlighter,
}: SectionBulletsProps) => {
  return (
    <ul
      className={`p-0 lg:pl-12 mt-8 mb-6 list-none ${textDir} text-xl flex flex-col gap-3`}
    >
      {bullets?.map((item, index) => (
        <li key={index} className="flex">
          {!customBulletIcon ? (
            <FaCarSide className={`mt-1 ${margin} text-orange-primary w-6`} />
          ) : (
            icon && icon
          )}
          <div className="inline-block">
            {typeof item === "string"
              ? item.split("\n").map((str, index) => (
                  <p className="mt-0 mb-5 text-xl" key={index}>
                    {hasTextHighlighter
                      ? textHighlighter(str, "font-bold")
                      : str}
                  </p>
                ))
              : item}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SectionBullets;
