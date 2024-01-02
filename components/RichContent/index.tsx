import React, { ReactElement, ReactNode } from "react";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import { ImageType } from "@/typings";
// import slugify from "react-slugify";

interface optionsInterface {
  renderMark: {
    [key: string]: (key: ReactNode) => ReactElement;
  };
  renderNode: {
    [key: string]: (node: any, children: any) => ReactElement;
  };
}
const RichContent = ({ richContent }: any) => {
  const options: optionsInterface = {
    renderMark: {
      [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className={"my-14 text-center text-4xl font-bold"}>{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 id={"1"} className={"text-3xl font-bold pt-20"}>
          {children}
        </h2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 id={"1"} className={"text-3xl font-bold pt-20 text-gray-primary"}>
          {children}
        </h3>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <h4 id={"1"} className={"text-2xl font-bold pt-20 text-gray-primary"}>
          {children}
        </h4>
      ),
      [BLOCKS.HEADING_5]: (node, children) => (
        <h5
          className={"my-12 text-center text-3xl font-bold text-orange-primary"}
        >
          {children}
        </h5>
      ),
      [BLOCKS.HEADING_6]: (node, children) => (
        <h6 className={"my-12 text-left text-lg font-bold text-orange-primary"}>
          {children}
        </h6>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => <p className={""}>{children}</p>,
      [BLOCKS.TABLE]: (node) => {
        return (
          <div className="relative rounded-xl overflow-auto">
            <div className="shadow-sm overflow-hidden my-8">
              <table className="table-fix text-base text-gray-primary border-collapse">
                {node.content.map((row: any, index: any) =>
                  row.content[0].nodeType === "table-header-cell" ? (
                    <thead key={index}>
                      <tr className="font-bold text-lg bg-gray-light">
                        {row.content.map((cell: any, index: any) => (
                          <th
                            key={index}
                            className="border-2 border-gray-light border-solid  py-6"
                          >
                            {cell.content[0].content[0].value}
                          </th>
                        ))}
                      </tr>
                    </thead>
                  ) : (
                    <tbody key={index}>
                      <tr className="border-2 border-gray-light border-solid">
                        {row.content.map((cell: any, index: any) => (
                          <td
                            key={index}
                            className="border-2 border-gray-light border-solid p-4"
                          >
                            {cell.content[0].content.length > 1 &&
                            cell.content[0].content[1].nodeType ===
                              "hyperlink" ? (
                              <a
                                href={cell.content[0].content[1].data.uri}
                                className="text-orange-primary"
                              >
                                {cell.content[0].content[1].content[0].value}
                              </a>
                            ) : (
                              cell.content[0].content[0].value
                            )}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  )
                )}
              </table>
            </div>
          </div>
        );
      },
      [INLINES.HYPERLINK]: (node, children) => {
        if (node.data.uri.includes("https://www.youtube.com/watch?v=")) {
          const videoId = node.data.uri.substring(
            node.data.uri.lastIndexOf("v=") + 2
          );
          return (
            <span className="flex justify-center">
              <iframe
                className="mt-8 w-full lg:w-1/2 h-72 "
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </span>
          );
        }
        return (
          <a className="text-orange-primary break-all" href={node.data.uri}>
            {node.content[0].value}
          </a>
        );
      },
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        if (!node.data.target) return <></>;
        const imageId: string = node.data.target.sys.id;
        const imagesData: ImageType[] = richContent.links.assets.block;

        const image = imagesData.find((img) => img?.sys?.id === imageId);

        if (!image) return <></>;
        let width = 800;
        let height = 600;
        if (image.title.includes("didiImage")) {
          if (image.width === 300 && image.height === 600) {
            width = 150;
            height = 300;
          }
          if (image.width === 150 && image.height === 150) {
            width = 100;
            height = 100;
          }
          if (image.width === 300 && image.height === 300) {
            width = 200;
            height = 200;
          }
        }
        if (
          image.title === "guia_mp_repartidor1" ||
          image.title === "guia_mp_repartidor3"
        ) {
          //2917x4700
          width = 400;
          height = 650;
        }
        if (image.title === "guia_mp_repartidor2") {
          //2917x6600
          width = 400;
          height = 905;
        }
        if (image.title === "guia_mp_restaurante1") {
          //2917x6100
          width = 400;
          height = 844;
        }
        if (
          image.title === "guia_mp_restaurante2" ||
          image.title === "guia_mp_restaurante3"
        ) {
          //2917x5500
          width = 400;
          height = 755;
        }
        if (
          image.title === "guia_mp_restaurante4" ||
          image.title === "guia_mp_repartidor4"
        ) {
          //2917x4100-4200
          width = 400;
          height = 570;
        }
        if (image.title === "qr-mach") {
          width = 250;
          height = 250;
        }
        return (
          <div className="my-12 flex w-full justify-center mx-auto relative">
            <Image
              className="w-full h-auto md:max-w-4xl"
              src={image.url}
              alt={image.description}
              width={width}
              height={height}
              // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            ></Image>
          </div>
        );
      },
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="mx-1 my-6">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ul className="mx-1 my-6">{children}</ul>
      ),
    },
  };

  return documentToReactComponents(richContent.json, options);
};

export default RichContent;
