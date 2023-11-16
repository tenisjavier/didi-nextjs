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
      <div className={`container mx-auto w-full `}>
        <div
          className={` py-4  px-4 lg:px-0  ${
            image ? "text-left" : "text-center"
          }`}
        >
          <h3 className={`mb-2 text-3xl lg:text-4xl  font-bold `}>{title}</h3>
          {desc && <p className="text-lg ">{desc}</p>}
          <span
            className={`flex justify-center ${
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
          <div className="mb-5 max-w-6xl text-center">
            <Image src={image.url} alt={image.description} fill></Image>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Banner;