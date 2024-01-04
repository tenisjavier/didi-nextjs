import React from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { ImageType } from "@/typings";

interface OptionsProps {
  name: string;
  title: string;
  image: ImageType;
  isActive?: boolean;
  onClick: (name: string) => void;
}

const Options = ({ name, title, image, isActive, onClick }: OptionsProps) => {
  const colors = isActive
    ? "bg-white border-orange-primary text text-orange-primary"
    : "bg-gray-300 border-gray-300 text-gray-500";

  return (
    <div
      onClick={() => onClick(name)}
      className={`${colors}  cursor-pointer font-bold relative flex flex-col justify-center items-center p-4  border-2 border-solid rounded-lg`}
    >
      <FaCheckCircle
        className={`absolute top-4 right-4 text-lg ${
          isActive ? "text-orange-primary" : "text-gray-500"
        }`}
      />
      <Image
        src={image.url}
        alt={image.description}
        height={176}
        width={192}
        className={`${
          isActive
            ? "lg:w-48 h-auto md:w-48  w-32 mb-2"
            : "lg:w-40  md:w-40 w-24 h-auto mb-2"
        }`}
      />
      <span className="">{title}</span>
    </div>
  );
};

export default Options;
