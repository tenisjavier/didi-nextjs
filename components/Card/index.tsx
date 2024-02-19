import React from "react";
import Btn from "@/components/Btn";
import Image from "next/image";
import textHighlighter from "@/utils/textHighlighter";
import { CardT } from "@/typings";
import Link from "next/link";

//? @desc: card component for making columns or cards

const Card = (props: CardT) => {
  const {
    title,
    desc,
    bgColor,
    textColor,
    image,
    video,
    btnLink,
    btnMode,
    btnText,
    btnType,
    RTL,
    hasTextHighlighter,
    textHighlighterStyle,
    titleStyles,
    titlePosition = "afterImage",
    descPosition = "beforeBtn",
    pathname,
    isImageIcon,
    type
  } = props;

  let dir: any = "ltr";

  if (RTL) {
    dir = "rtl";
  }

  const truncate = (str: string, n: number) => {
    return str.length > n ? str.substring(0, n - 1) + "..." : str;
  };

  const isCreditCard = type === 'creditCard' ? "rounded-2xl p-8 lg:w-[600px] w-full" : "max-w-xs"

  return (
    <div
      style={{ direction: dir }}
      className={`${isCreditCard}
       rounded-  flex flex-col items-center ${bgColor} text-${textColor} my-3 text-center lg:mx-4`}
    >
      {titlePosition === "beforeImage" && title && (
        <h4 className={`mb-4 text-xl font-bold lg:text-center ${titleStyles}`}>
          {textHighlighter(title, textHighlighterStyle)}
        </h4>
      )}
      {pathname ? (
        <>
          <Link href={pathname}>
            {image && (
              <Image
                src={image.url}
                alt={image.description}
                className={`${isImageIcon
                  ? "w-44  h-auto"
                  : "max-h-64 object-cover h-full w-full"
                  }`}
                width={400}
                height={400}
              ></Image>
            )}
          </Link>
        </>
      ) : (
        <>
          {image && (
            <Image
              src={image.url}
              alt={image.description}
              className={`${isImageIcon
                ? "w-20  h-auto"
                : "max-h-64 object-contain h-full w-full"
                }`}
              width={400}
              height={400}
            ></Image>
          )}
        </>
      )}

      {video && (
        <iframe
          className="h-56 w-full"
          src={video}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}

      <div
        className={` flex flex-col items-center justify-between px-6 py-4 text-center`}
      >
        <div>
          {titlePosition === "afterImage" && title && (
            <h4
              className={`mb-4 text-xl font-semibold lg:text-center ${titleStyles}`}
            >
              {textHighlighter(title, textHighlighterStyle)}
            </h4>
          )}
          {desc && descPosition === "beforeBtn" && (
            <p>{textHighlighter(desc, textHighlighterStyle)}</p>
          )}
        </div>
        <div className="flex justify-center flex-col">
          <Btn
            btnType={btnType}
            btnLink={btnLink}
            btnMode={btnMode}
            btnText={btnText}
          ></Btn>
        </div>
        {desc && descPosition === "afterBtn" && (
          <p>{textHighlighter(desc, textHighlighterStyle)}</p>
        )}
      </div>
    </div>
  );
};

export default Card;
