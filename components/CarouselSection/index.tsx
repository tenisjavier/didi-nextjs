"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CarouselSectionT } from "@/typings";
import CTASection from "@/components/CTASection";

const CarouselSection = ({
  icons,
  menu,
  bgColor,
  textColor,
  sections,
}: // updateHero,
CarouselSectionT) => {
  const [activeItem, setActiveItem] = useState(0);
  return (
    <>
      {sections.map((section, index) => {
        return (
          <div key={index} className={index !== activeItem ? "hidden" : ""}>
            <CTASection {...section}></CTASection>
          </div>
        );
      })}
      <section
        className={` text-${textColor} flex flex-wrap items-center justify-center`}
      >
        <div
          className={`absolute top-115 w-80 lg:w-fit p-2 lg:p-4 z-30 h-32 ${bgColor} rounded-xl shadow-xl`}
        >
          <div className="flex justify-center items-center h-full ">
            {icons.map((icon, index) => (
              <div
                key={index}
                onClick={() => {
                  setActiveItem(index === activeItem ? activeItem : index);
                }}
                className={`${
                  index === activeItem
                    ? "grayscale-0 font-bold"
                    : "grayscale font-light"
                } w-44 flex flex-col hover:cursor-pointer justify-center items-center h-full border-0 border-l-2 first:border-l-0 border-solid border-gray-light`}
              >
                <div>
                  <Image
                    src={icon.url}
                    alt={icon.description}
                    className="w-12 lg:w-14"
                    width={48}
                    height={48}
                  ></Image>
                </div>
                <div className="mt-2 text-center h-8 lg:h-4 text-xs lg:text-sm px-2">
                  {menu[index]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CarouselSection;
