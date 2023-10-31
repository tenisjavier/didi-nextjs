import React from "react";
import Btn from "@/components/Btn";
import Image from "next/image";
import { AiOutlineClockCircle } from "react-icons/ai";
import textHighlighter from "@/utils/textHighlighter";
import { CardT } from "@/typings";

// @desc: card component for making columns or cards
// @props: type drv/pax/none | link (normal btn) "url" | mode light/none | children: normal btn text

// export interface CardProps extends BtnProps {
//   title: ReactNode | string;
//   desc?: string;
//   bgColor: string;
//   textColor: string;
//   image: any;
//   imageStyle?: string;
//   isImage?: boolean;
//   height?: string;
//   width?: string;
//   index?: number;
//   RTL?: boolean;
//   rounded?: string;
//   reverse?: boolean;
//   hasTextHighlighter?: boolean;
//   textHighlighterStyle?: string;
//   titleStyles?: string;
//   titlePosition?: "beforeImage" | "afterImage";
//   descPosition?: "beforeBtn" | "afterBtn";
// }

const Card = (props: CardT) => {
  const {
    title,
    desc,
    bgColor,
    textColor,
    image,
    imageStyle,
    height,
    width,
    btnLink,
    btnMode,
    btnText,
    btnType,
    index,
    RTL,
    rounded,
    reverse,
    hasTextHighlighter,
    textHighlighterStyle,
    titleStyles,
    titlePosition = "afterImage",
    descPosition = "beforeBtn",
  } = props;

  let dir: any = "ltr";

  if (RTL) {
    dir = "rtl";
  }

  return (
    <div
      style={{ direction: dir }}
      className={` "max-w-xs"
       ${rounded} rounded ${bgColor} ${
        reverse ? "flex flex-col-reverse justify-between" : ""
      }  text-${textColor} my-3 text-center lg:mx-4 card-${index}`}
    >
      {titlePosition === "beforeImage" && title && (
        <h4 className={`mb-4 text-xl font-bold lg:text-center ${titleStyles}`}>
          {hasTextHighlighter
            ? textHighlighter(title as string, textHighlighterStyle)
            : title}
        </h4>
      )}
      <div className="mb-5">
        {image && (
          <Image
            src={image.url}
            alt={image.description}
            className={imageStyle}
          ></Image>
        )}
      </div>

      <div
        className={`flex ${height} ${width} flex-col items-center justify-between px-6 py-4 text-center`}
      >
        <div className={`mb-4`}>
          {titlePosition === "afterImage" && title && (
            <h4
              className={`mb-4 text-xl font-bold lg:text-center ${titleStyles}`}
            >
              {hasTextHighlighter
                ? textHighlighter(title as string, textHighlighterStyle)
                : title}
            </h4>
          )}
          <p className={"text-lg"}></p>
          {descPosition === "beforeBtn" && desc}
        </div>
        <div className="flex justify-center flex-col">
          <Btn
            btnType={btnType}
            btnLink={btnLink}
            btnMode={btnMode}
            btnText={btnText}
          ></Btn>
        </div>
        {descPosition === "afterBtn" && desc}
      </div>
    </div>
  );
};

export default Card;
