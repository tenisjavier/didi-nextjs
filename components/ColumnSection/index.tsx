import React from "react";
import Card from "@/components/Card";
import textHighlighter from "@/utils/textHighlighter";
import { ColumnSectionT } from "@/typings";

// export interface ColumnsSectionProps {
//   columns: CardT[];
//   title?: string;
//   desc?: string;
//   bgColor: string;
//   textColor: string;
//   sectionID?: string;
//   RTL?: boolean;
//   hasTextHighlight?: boolean;
//   textHighlightStyles?: string;
//   gridCols?: string;
//   gap?: number;
// }

const ColumnsSection = (props: ColumnSectionT) => {
  const {
    columns,
    title,
    desc,
    bgColor,
    textColor,
    // sectionID,
    RTL,
    hasTextHighlight,
    textHighlightStyles,
    gridCols,
    gap,
  } = props;
  let dir: any = "ltr";

  if (RTL) {
    dir = "rtl";
  }

  return (
    <section
      style={{ direction: dir }}
      className={`${bgColor} text-${textColor} py-12`}
    >
      <div className="container mx-auto flex flex-col flex-wrap justify-center md:justify-around">
        {title &&
          title
            .split("\n")
            .map((str, index) => (
              <h2 key={index} className="text-left lg:text-center text-4xl">
                {hasTextHighlight
                  ? textHighlighter(str, textHighlightStyles)
                  : str}
              </h2>
            ))}
        {desc &&
          desc
            .split("\n")
            .map((str, index) => (
              <p key={index} className="text-left lg:text-center text-lg">{str}</p>
            ))}

        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:${"grid-cols-" + gridCols
            } ${"gap-" + gap} mt-10  lg:justify-around `}
        >
          {columns &&
            columns.map((col, index) => {
              return <Card {...col} key={index}></Card>;
            })}
        </div>
      </div>
    </section>
  );
};

export default ColumnsSection;
