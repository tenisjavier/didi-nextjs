"use client";

import React from "react";
import Card from "@/components/Card";
import { ColumnSectionT } from "@/typings";
import Pagination from "../Pagination";
import textBreak from "@/utils/textBreak";

const ColumnsSection = (props: ColumnSectionT) => {
  const {
    columns,
    items,
    title,
    desc,
    bgColor,
    textColor,
    RTL,
    gridCols,
    gap,
    pagination,
  } = props;
  let dir: any = "ltr";

  if (RTL) {
    dir = "rtl";
  }

  const columnsGridCount =
    gridCols > (columns?.length || 0) ? "flex flex-wraper" : false;

  const gridConfig = `${
    columnsGridCount || `grid grid-cols-1  lg:grid-cols-${gridCols}`
  }`;

  return (
    <section
      style={{ direction: dir }}
      className={`${bgColor} text-${textColor} py-8`}
      id={"columnSection"}
    >
      <div className="container flex flex-col flex-wrap justify-center items-center md:justify-around">
        {title && (
          <h2 className="text-left lg:text-center text-4xl">
            {textBreak(title, textColor)}
          </h2>
        )}

        {desc && (
          <p className="text-left lg:text-center text-lg">
            {textBreak(desc, textColor)}
          </p>
        )}

        {columns && (
          <div className={`${gridConfig} ${"gap-" + gap}`}>
            {columns &&
              columns.map((col, index) => {
                // const colPositioToEnd = columns.length - (index + 1)
                // const lastColumns = columns.length % gridCols
                // const lastItem = Math.abs(colPositioToEnd - gridCols) >= gridCols

                // const colSpan = lastColumns > 0 && lastItem ? `${lastColumns > 1 ? `col-start-${gridCols} col-end-${gridCols + 1}` : `col-start-${Math.ceil(gridCols / 2)}`}` : ``

                return <Card {...col} key={index}></Card>;
              })}
          </div>
        )}
        {items && items.length > 0 && (
          <div
            className={`grid grid-cols-1 ${
              items && items?.length < 3
                ? items?.length > 1
                  ? "lg:grid-cols-2"
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
