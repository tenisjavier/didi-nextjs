import React from "react";
import Card from "../Card";
import { ColumnImageT } from "@/typings";
import Image from "next/image";

// interface ColumnImageProps {
//   columns: any[];
//   bgColor?: string;
//   title: string | React.ReactNode;
//   desc?: string;
//   textColor?: string;
//   image?: any;
//   imageAlignment?: string;
// }

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

  const imageStyle = "z-10 m-4 w-80 h-80 lg:w-auto lg:h-120 " + rounded;

  return (
    <section className={`${bgColor} text-${textColor} py-12`}>
      <div className="container mx-auto flex w-full  flex-col justify-center">
        {title && (
          <h2 className="text-3xl lg:text-4xl text-left lg:text-center">
            {title}
          </h2>
        )}
        {desc && <p className="text-center">{desc}</p>}

        <div
          className={`mt-10 ${gap ? 'gap-' + gap : 'gap-2'} ${gridCols ? 'grid-cols-1 md:grid-cols-' + gridCols : 'grid-cols-1 md:grid-cols-3'}  md:grid  align-center justify-center `}
        >
          {columns.map((col, index) => {
            if (index === 0)
              return (
                <>
                  <div className=" row-span-2 text-center mb-20 block lg:hidden">
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
            if (index === indexImage)
              return (
                <>
                  <div className=" row-span-2 text-center mb-20 hidden lg:block">
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
