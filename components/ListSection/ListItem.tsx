import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { ListItemT } from "@/typings";

const ListItem = ({ text, secondText, link, image }: ListItemT) => {
  const subText = secondText && secondText.slice(0, 40).concat("...");

  const item = link ? (
    <div className=" flex items-center justify-between px-4">
      <span className="z-10 pt-1">
        <p>
          <Link href={link}>{text}</Link>
        </p>
        <p className="text-gray-primary">
          <Link href={link}>{secondText && subText}</Link>
        </p>
      </span>

      <Link href={link} className="z-10">
        <BsFillArrowRightCircleFill />
      </Link>
    </div>
  ) : (
    <p>{text}</p>
  );
  return (
    <li
      className={`${
        image ? "text-white" : "text-blue-primary"
      } border-gray-primary  rounded border border-solid h-32  relative`}
    >
      {image && (
        <Image
          src={image.url}
          alt={image.description}
          className={
            "!absolute z-0 h-full w-full !block bg-cover brightness-50 object-cover"
          }
          fill
        ></Image>
      )}
      {item}
    </li>
  );
};

export default ListItem;
