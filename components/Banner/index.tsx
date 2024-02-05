import React from "react";
import Btn from "@/components/Btn";
import Image from "next/image";
import { BannerT } from "@/typings";
import textHighlighter from "@/utils/textHighlighter";

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
}: BannerT) => {

  return (
    <div className={`py-8 lg:py-4 ${bgColor && bgColor} text-${textColor}`}>
      <div className={`container mx-auto w-full ${bgColor && bgColor} text-${textColor} flex  ${imageBottom ? "flex-col" : ""} items-center ${image ? "justify-between" : "justify-center"} flex-wrap`}>
        <div
          className={` py-4  px-4 lg:px-0  ${image ? "text-left" : "text-center"
            }`}
        >
          <h3 className={`mb-2 text-3xl lg:text-4xl  font-bold `}>{textHighlighter(title)}</h3>
          {desc && <p className="text-lg ">{textHighlighter(desc)}</p>}
          {video && (
            <p className="text-lg ">
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
            className={`flex justify-center ${btnText != "VideoSection.btnText" ? "" : "hidden"
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
          <Image className={`"z-10 my-10 w-56 h-auto object-contain" ${imageBottom ? "w-full max-h-[1000px] " : ""}`} src={image.url} alt={image.description} width={image?.width || 400} height={image?.height || 400}></Image>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Banner;
