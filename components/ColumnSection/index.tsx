"use client";

import React, { useEffect, useRef, useState } from "react";
import Card from "@/components/Card";
import textHighlighter from "@/utils/textHighlighter";
import { ColumnSectionT, ListItemT } from "@/typings";
import Pagination from "../Pagination";
import { useRouter, useSearchParams } from "next/navigation";

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
    country,
    articleCategory,
    guideCategory,
    itemType,
  } = props;

  const { push, replace  } = useRouter()
  const params = useSearchParams()

  const lastPage = Number(params.getAll('page')?.[0])

  const [currentPage, setCurrangePage] = useState<number>(lastPage || 1)
  const [itemsContent, setItemsContent] = useState(items || []);

  const [paginationContent, setPaginationContent] = useState(pagination);

  useEffect(() => {
    if (currentPage === 1) {
      replace(`${window.location.pathname}`);
    } else if (currentPage !== 1) {
      replace(`?page=${currentPage}`);
    }

  }, [currentPage, push, replace])

  const columnRef = useRef<HTMLOptionElement>(null)

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
          limit: paginationContent?.limit,
          skip: Math.abs(paginationContent?.skip + paginationContent?.limit),
        }),
      });

      setCurrangePage(currentPage + 1)
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
      columnRef.current?.scrollIntoView()
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
          limit: paginationContent?.limit,
          skip: Math.abs(paginationContent?.skip - paginationContent?.limit),
        }),
      });


      setCurrangePage(currentPage - 1)
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
      columnRef.current?.scrollIntoView()
    }
  };

  const setPage = async (page: number) => {
    if (paginationContent) {
      const res = await fetch("/api/pagination", {
        method: "POST",
        body: JSON.stringify({
          code: country?.code,
          category: articleCategory?.[0] || guideCategory?.[0],
          itemType: itemType,
          limit: paginationContent?.limit,
          skip: Math.abs(page),
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
      columnRef.current?.scrollIntoView();
    }
  };


  useEffect(() => {
    if (currentPage !== 1 && paginationContent) {
      const lastPageTransformToSkip = currentPage * paginationContent.limit

      setPage(lastPageTransformToSkip - paginationContent.limit)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section
      style={{ direction: dir }}
      className={`${bgColor} text-${textColor} py-12`}
      id={'columnSection'}
      ref={columnRef}
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
          setCurrangePage={setCurrangePage}
        />
      </div>
    </section>
  );
};

export default ColumnsSection;
