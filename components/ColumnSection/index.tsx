"use client";

import React from "react";
import Card from "@/components/Card";
import textHighlighter from "@/utils/textHighlighter";
import { ColumnSectionT, ListItemT } from "@/typings";
import Pagination from "../Pagination";

const ColumnsSection = (props: ColumnSectionT) => {
  const {
    columns,
    items,
    title,
    desc,
    bgColor,
    textColor,
    RTL,
    hasTextHighlight,
    textHighlightStyles,
    gridCols,
    gap,
    pagination,
  } = props;
  let dir: any = "ltr";

  if (RTL) {
    dir = "rtl";
  }

  return (
    <section
      style={{ direction: dir }}
      className={`${bgColor} text-${textColor} py-12`}
      id={"columnSection"}
    >
      <div className="container mx-auto flex flex-col flex-wrap justify-center items-center md:justify-around">
        {title &&
          title.split("\n").map((str, index) => (
            <h2 key={index} className="text-left lg:text-center text-4xl">
              {hasTextHighlight
                ? textHighlighter(str, textHighlightStyles)
                : str}
            </h2>
          ))}
        {desc &&
          desc.split("\n").map((str, index) => (
            <p key={index} className="text-left lg:text-center text-lg">
              {str}
            </p>
          ))}

        {columns && (
          <div
            className={`grid grid-cols-1 ${
              columns && columns?.length < 3
                ? columns?.length > 1
                  ? "grid-cols-2"
                  : ""
                : "lg:grid-cols-" + gridCols
            }  ${"gap-" + gap} mt-10  lg:justify-around `}
          >
            {columns &&
              columns.map((col, index) => {
                return <Card {...col} key={index}></Card>;
              })}
          </div>
        )}
        {items && (
          <div
            className={`grid grid-cols-1 ${
              items && items?.length < 3
                ? items?.length > 1
                  ? "grid-cols-2"
                  : ""
                : "lg:grid-cols-" + gridCols
            }  ${"gap-" + gap} mt-10  lg:justify-around `}
          >
            {items &&
              items.map((item, index) => {
                return <Card {...item} key={index}></Card>;
              })}
          </div>
        )}
        {
          <Pagination
            page={Number(pagination?.page)}
            limit={Number(pagination?.limit)}
            total={Number(pagination?.total)}
          />
        }
      </div>
    </section>
  );
};

export default ColumnsSection;
