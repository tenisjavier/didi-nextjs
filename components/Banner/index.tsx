import React from "react";
import Btn from "@/components/Btn";
import Image from "next/image";
import { BannerT } from "@/typings";
import textBreak from "@/utils/textBreak";

const Banner = ({
  title,
  desc,
  bgColor,
  textColor,
  image,
  btnLink,
  btnMode,
  btnType,
  btnText,
  reverse,
  imageBottom,
  video,
  borderColor,
}: BannerT) => {
  return (
    <section
      className={` py-8 px-4 ${bgColor && bgColor} text-${textColor} ${
        borderColor ? `border border-solid border-${borderColor}` : ""
      }`}
    >
      <div
        className={`container mx-auto w-full ${
          bgColor && bgColor
        } text-${textColor} flex  ${
          imageBottom ? "flex-col" : ""
        } items-center ${
          image ? "justify-between" : "justify-center"
        } flex-wrap`}
      >
        <div>
          {title && (
            <h3
              className={`mb-2 text-3xl lg:text-4xl  font-bold text-left lg:text-center`}
            >
              {textBreak(title, textColor)}
            </h3>
          )}
          {desc && (
            <p className="text-lg lg:text-center ">
              {textBreak(desc, textColor)}
            </p>
          )}

          {video && (
            <p className="text-lg lg:text-center">
              <iframe
                className="mt-8 w-full h-64 md:h-110"
                src={video}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </p>
          )}

          <span
            className={`flex justify-center my-8 ${
              btnText != "VideoSection.btnText" ? "" : "hidden"
            }`}
          >
            <Btn
              btnType={btnType}
              btnLink={btnLink}
              btnMode={btnMode}
              btnText={btnText}
            ></Btn>
          </span>
        </div>

        {image ? (
          <Image
            className={`"z-10 my-10 mx-10 w-140 h-auto object-contain" ${
              imageBottom ? "w-full max-h-[1000px] " : ""
            }`}
            src={image.url}
            alt={image.description}
            width={image?.width || 1100}
            height={image?.height || 1100}
          ></Image>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default Banner;
