"use client"

import React, { useState } from "react";
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
    // sectionID,
    RTL,
    hasTextHighlight,
    textHighlightStyles,
    gridCols,
    gap,
    pagination,
    country,
    articleCategory,
    guideCategory,
    itemType,
  } = props;
  const [itemsContent, setItemsContent] = useState(items || []);
  const [paginationContent, setPaginationContent] = useState(pagination);

  let dir: any = "ltr";

  if (RTL) {
    dir = "rtl";
  }

  const nextPage = async () => {
    if (paginationContent) {
      const res = await fetch("/api/pagination", {
        method: "POST",
        body: JSON.stringify({
          code: country?.code,
          category: articleCategory?.[0] || guideCategory?.[0],
          itemType: itemType,
          limit: 10,
          skip: paginationContent?.skip + 10,
        }),
      });
      const { data } = await res.json();

      if (itemType?.toLowerCase() === "article") {
        if (country?.code && articleCategory?.[0]) {
          const items: ListItemT = data?.items?.map((article: any) => {
            return {
              title: article.title,
              desc: article.excerpt,
              image: article.featuredImage,
              pathname: article.slug,
              btnLink: article.slug,
              btnType: "custom",
              btnText: "Leer Artículo",
              btnMode: "dark",
              bgColor: "bg-white",
              textColor: "gray-primary",
            };
          });
          data.items = items;
          data.pagination = {
            total: data?.total,
            limit: data?.limit,
            skip: data?.skip,
          };
        }
      }

      if (itemType?.toLowerCase() === "guide") {
        if (country?.code && guideCategory?.[0]) {
          const items: ListItemT = data?.items?.map((guide: any) => {
            return {
              title: guide.title,
              desc: guide.excerpt,
              image: guide.featuredImage,
              pathname: guide.slug,
              btnLink: guide.slug,
              btnType: "custom",
              btnText: "Leer Artículo",
              btnMode: "dark",
              bgColor: "bg-white",
              textColor: "gray-primary",
            };
          });
          data.items = items;
          data.pagination = {
            total: data?.total,
            limit: data?.limit,
            skip: paginationContent?.skip - 10,
          };
        }
      }

      setItemsContent(data.items);
      setPaginationContent(data.pagination);
    }
  };

  const prevPage = async () => {
    if (paginationContent) {

      const res = await fetch("/api/pagination", {
        method: "POST",
        body: JSON.stringify({
          code: country?.code,
          category: articleCategory?.[0] || guideCategory?.[0],
          itemType: itemType,
          limit: 10,
          skip: paginationContent?.skip - 10,
        }),
      });

      const { data } = await res.json();

      if (itemType?.toLowerCase() === "article") {
        if (country?.code && articleCategory?.[0]) {
          const items: ListItemT = data?.items?.map((article: any) => {
            return {
              title: article.title,
              desc: article.excerpt,
              image: article.featuredImage,
              pathname: article.slug,
              btnLink: article.slug,
              btnType: "custom",
              btnText: "Leer Artículo",
              btnMode: "dark",
              bgColor: "bg-white",
              textColor: "gray-primary",
            };
          });
          data.items = items;
          data.pagination = {
            total: data?.total,
            limit: data?.limit,
            skip: data?.skip,
          };
        }
      }

      if (itemType?.toLowerCase() === "guide") {
        if (country?.code && guideCategory?.[0]) {
          const items: ListItemT = data?.items?.map((guide: any) => {
            return {
              title: guide.title,
              desc: guide.excerpt,
              image: guide.featuredImage,
              pathname: guide.slug,
              btnLink: guide.slug,
              btnType: "custom",
              btnText: "Leer Artículo",
              btnMode: "dark",
              bgColor: "bg-white",
              textColor: "gray-primary",
            };
          });
          data.items = items;
          data.pagination = {
            total: data?.total,
            limit: data?.limit,
            skip: data?.skip,
          };
        }
      }

      setItemsContent(data.items);
      setPaginationContent(data.pagination);
    }
  };

  const setPage = async (page: number) => {
    if (paginationContent) {
      console.log('page', page)
      const res = await fetch("/api/pagination", {
        method: "POST",
        body: JSON.stringify({
          code: country?.code,
          category: articleCategory?.[0] || guideCategory?.[0],
          itemType: itemType,
          limit: 10,
          skip: page,
        }),
      });

      const { data } = await res.json();

      if (itemType?.toLowerCase() === "article") {
        if (country?.code && articleCategory?.[0]) {
          const items: ListItemT = data?.items?.map((article: any) => {
            return {
              title: article.title,
              desc: article.excerpt,
              image: article.featuredImage,
              pathname: article.slug,
              btnLink: article.slug,
              btnType: "custom",
              btnText: "Leer Artículo",
              btnMode: "dark",
              bgColor: "bg-white",
              textColor: "gray-primary",
            };
          });
          data.items = items;
          data.pagination = {
            total: data?.total,
            limit: data?.limit,
            skip: data?.skip,
          };
        }
      }

      if (itemType?.toLowerCase() === "guide") {
        if (country?.code && guideCategory?.[0]) {
          const items: ListItemT = data?.items?.map((guide: any) => {
            return {
              title: guide.title,
              desc: guide.excerpt,
              image: guide.featuredImage,
              pathname: guide.slug,
              btnLink: guide.slug,
              btnType: "custom",
              btnText: "Leer Artículo",
              btnMode: "dark",
              bgColor: "bg-white",
              textColor: "gray-primary",
            };
          });
          data.items = items;
          data.pagination = {
            total: data?.total,
            limit: data?.limit,
            skip: data?.skip,
          };
        }
      }

      setItemsContent(data.items);
      setPaginationContent(data.pagination);
    }
  };

  return (
    <section
      style={{ direction: dir }}
      className={`${bgColor} text-${textColor} py-12`}
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
            className={`grid grid-cols-1 ${columns && columns?.length < 3
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
        {itemsContent && (
          <div
            className={`grid grid-cols-1 ${itemsContent && itemsContent?.length < 3
              ? itemsContent?.length > 1
                ? "grid-cols-2"
                : ""
              : "lg:grid-cols-" + gridCols
              }  ${"gap-" + gap} mt-10  lg:justify-around `}
          >
            {itemsContent &&
              itemsContent.map((item, index) => {
                return <Card {...item} key={index}></Card>;
              })}
          </div>
        )}

        <Pagination
          pagination={paginationContent}
          nextPage={nextPage}
          prevPage={prevPage}
          setPage={setPage}
        />
      </div>
    </section>
  );
};

export default ColumnsSection;
