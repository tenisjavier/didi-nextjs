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

  let indexImage = 2;
  if (imageAlignment === "left") indexImage = 0;
  if (imageAlignment === "center") indexImage = 1;
  if (imageAlignment === "right") indexImage = 2;

  const imageStyle =
    `z-10 m-4 w-60 h-80 items-center ${
      imageAlignment === "center" ? "lg:w-100 lg:h-auto" : "lg:w-80"
    } lg:h-120 max-lg:hidden ` + rounded;

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
            if (index === 0)
              return (
                <>
                  <div className=" row-span-2  text-center mb-20 lg:mb-0 block lg:hidden">
                    {image && (
                      <Image
                        src={image.url}
                        alt={image.description}
                        className={imageStyle + " w-80 h-auto"}
                        width={image.width || 450}
                        height={image.height || 450}
                      />
                    )}
                  </div>
                  <Card {...col} key={index}></Card>
                </>
              );
            if (index === indexImage)
              return (
                <>
                  <div
                    className={`self-center lg:mb-0 lg:block row-span-2 text-center mb-20 hidden ${
                      imageAlignment === "center"
                        ? "lg:flex justify-center items-center lg:max-h-[600px]"
                        : "lg:block "
                    }`}
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
                  <Card {...col} key={index}></Card>
                </>
              );
            return <Card {...col} key={index}></Card>;
          })}
        </div>
      </div>
    </section>
  );
};

export default ColumnImageSection;
