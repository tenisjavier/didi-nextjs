import { CardPayT } from "@/typings";
import Image from "next/image";
import React from "react";
import Btn from "../Btn";

export interface CardPayProps {
  reviewAuthor?: string;
  reviewRole?: string;
  reviewGeo?: string;
  reviewDate?: string;
}

const CardPay = ({
  title,
  desc,
  subDesc,
  type,
  image,
  reviewAuthor,
  reviewRole,
  reviewDate,
  reviewGeo,
  btnText,
  btnLink,
  btnMode,
  btnType
}: CardPayT) => {
  let cardImage: any;
  let cardLink: any;

  if (type === "press") {
    cardImage = (
      <div>
        <Image className="w-1/2 max-h-8 mb-4 mt-8" width={200} height={200} alt={image?.description} src={image?.url}></Image>
      </div>
    );
    cardLink = <Btn
      btnType={btnType}
      btnLink={btnLink}
      btnMode={btnMode}
      btnText={btnText}
    ></Btn>
  }

  if (type === "review") {
    cardImage = (
      <div className="flex justify-start items-start w-full">
        <div className="flex justify-start items-center">
          <Image className="w-1/4 h-auto   rounded-full" width={200} height={200} alt={image?.description} src={image?.url}></Image>
          <div className="ml-2">
            <h5 className="m-0 p-0">{reviewAuthor}</h5>
            <p className="text-gray-400">{reviewRole}</p>
          </div>
        </div>
        <p className="text-gray-400 mt-1">{reviewDate}</p>
      </div>
    );
    cardLink = <p className="text-gray-400">{reviewGeo}</p>;
  }
  return (
    <div
      className={`${type === "press" &&
        "group transition-all duration-130 hover:mt-0 hover:ease-in hover:h-[490px]"
        } my-10 text-left  relative flex  justify-between flex-col w-[345px] bg-white p-6 shadow-md shadow-gray-200 snap-center h-[450px]   overflow-hidden flex-shrink-0 rounded`}
    >
      <div>
        {cardImage}
        <a href="#">
          <h3 className="text-2xl font-bold my-8">{title}</h3>
        </a>
        <p className="text-lg">{desc}</p>
        <p className="text-gray-400 mt-4 hidden group-hover:block">{subDesc}</p>
      </div>
      <div>{cardLink}</div>
    </div>
  );
};

export default CardPay;
