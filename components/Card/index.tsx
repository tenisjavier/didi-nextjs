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
  } = props;

  let dir: any = "ltr";

  if (RTL) {
    dir = "rtl";
  }

  const truncate = (str: string, n: number) => {
    return str.length > n ? str.substring(0, n - 1) + "..." : str;
  };

  return (
    <div
      style={{ direction: dir }}
      className={`max-w-xs
       rounded flex flex-col items-center ${bgColor} text-${textColor} my-3 text-center lg:mx-4`}
    >
      {titlePosition === "beforeImage" && title && (
        <h4 className={`mb-4 text-xl font-bold lg:text-center ${titleStyles}`}>
          {hasTextHighlighter
            ? textHighlighter(
              truncate(title, 50) as string,
              textHighlighterStyle
            )
            : truncate(title, 50)}
        </h4>
      )}


      {pathname ? (
        <>
          <Link href={pathname}>
            {image && (
              <Image
                src={image.url}
                alt={image.description}
                className={`${
                  isImageIcon
                    ? "w-14  h-auto"
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
              className={`${
                isImageIcon
                  ? "w-14  h-auto"
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
              {hasTextHighlighter
                ? textHighlighter(
                  truncate(title, 50) as string,
                  textHighlighterStyle
                )
                : truncate(title, 50)}
            </h4>
          )}
          {desc && descPosition === "beforeBtn" && (
            <p>{truncate(desc as string, 120)}</p>
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
          <p>{truncate(desc as string, 120)}</p>
        )}
      </div>
    </div>
  );
};

export default Card;
