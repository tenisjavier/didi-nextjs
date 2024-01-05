import React from "react";
import Card from "@/components/Card";
import textHighlighter from "@/utils/textHighlighter";
import { ColumnSectionT } from "@/typings";
import { fetchArticleByCategory, fetchGuidesByCategory } from "@/utils/db";
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
  } = props;

  let itemsContent = items || []
  // const [itemsContent, setItemsContent] = React.useState<any[]>(items || [])

  let dir: any = "ltr";

  if (RTL) {
    dir = "rtl";
  }

  const nextPage = async () => {
    const res = await fetchArticleByCategory("mx", "ride", {
      limit: 10,
      skip: pagination.skip || 0 + 1,
    })

    console.log('nextPage', res)

    itemsContent = res.items
    console.log(res)
  }

  const prevPage = async () => {

  }

  const setPage = async (page: number) => {
    console.log(page)
  }

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
            className={`grid grid-cols-1 ${columns && columns?.length < 3 ? columns?.length > 1 ? "grid-cols-2" : "" : "lg:grid-cols-" + gridCols}  ${"gap-" + gap
              } mt-10  lg:justify-around `}
          >
            {columns &&
              columns.map((col, index) => {
                return <Card {...col} key={index}></Card>;
              })}
          </div>
        )}
        {itemsContent && (
          <div
            className={`grid grid-cols-1 ${itemsContent && itemsContent?.length < 3 ? itemsContent?.length > 1 ? "grid-cols-2" : "" : "lg:grid-cols-" + gridCols}  ${"gap-" + gap
              } mt-10  lg:justify-around `}
          >

            {itemsContent && itemsContent.map((item, index) => {
              return <Card {...item} key={index}></Card>;
            })}

          </div>
        )}

        <Pagination
          pagination={pagination}
          itemsContent={itemsContent}
        />
      </div>
    </section>
  );
};

export default ColumnsSection;
