import React from "react";
import Btn from "@/components/Btn";
import Image from "next/image";
import { BannerT } from "@/typings";

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
}: BannerT) => {

  return (
    <div className={`py-8 lg:py-4 ${bgColor && bgColor} text-${textColor}`}>
      <div className={`container mx-auto w-full ${bgColor && bgColor} text-${textColor} flex items-center justify-between flex-wrap`}>
        <div
          className={` py-4  px-4 lg:px-0  ${image ? "text-left" : "text-center"
            }`}
        >
          <h3 className={`mb-2 text-3xl lg:text-4xl  font-bold `}>{title}</h3>
          {desc && <p className="text-lg ">{desc}</p>}
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
          <Image className="z-10 my-10 w-56 h-auto" src={image.url} alt={image.description} width={image?.width || 400} height={image?.height || 400}></Image>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Banner;
