import React from "react";
import Card from "../Card";
import { ColumnImageT } from "@/typings";
import Image from "next/image";
import textBreak from "@/utils/textBreak";

const ColumnImageSection = (props: ColumnImageT) => {
  const {
    columns,
    bgColor,
    title,
    desc,
    textColor,
    image,
    imageAlignment,
    rounded,
    gap,
    gridCols,
  } = props;

  const imageColStart =
    {
      left: 1,
      center: 2,
      right: 3,
    }[imageAlignment] || 3;

  const cardsColStart = {
    left: [2, 3],
    center: [1, 3],
    right: [1, 2],
  };

  const imageStyle = `z-10 m-4 w-60 h-80 items-center lg:w-70 ` + rounded;

  return (
    <section className={`${bgColor} text-${textColor} py-16`}>
      <div className="container mx-auto flex w-full  flex-col justify-center items-center">
        {title && (
          <h2 className="text-3xl lg:text-4xl text-left lg:text-center">
            {textBreak(title, textColor)}
          </h2>
        )}
        {desc && <p className="text-center">{textBreak(desc, textColor)}</p>}

        <div
          className={`mt-10 grid ${gap ? "gap-" + gap : "gap-2"} ${
            gridCols
              ? "grid-cols-1 lg:grid-cols-" + gridCols
              : "grid-cols-1 lg:grid-cols-3"
          }    justify-center items-center `}
        >
          {columns.map((col, index) => {
            const columnSide = index % 2;
            const colStart =
              cardsColStart[imageAlignment || "right"][columnSide];

            return (
              <div key={index} className={`lg:col-start-${colStart} `}>
                <Card {...col} key={index}></Card>;
              </div>
            );
          })}

          <div
            className={`self-center lg:mb-0 lg:block row-span-2 row-start-1 col-start-${imageColStart} text-center mb-20 hidden`}
          >
            {image && (
              <Image
                src={image.url}
                alt={image.description}
                className={imageStyle}
                width={image.width || 450}
                height={image.height || 450}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColumnImageSection;
