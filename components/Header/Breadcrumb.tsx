"use client";
import React from "react";
import { AiOutlineRight, AiFillHome } from "react-icons/ai";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CountryCode } from "@/typings";

export interface BreadcrumbProps {
  customBreadcrumb?: string[];
  countryCode: CountryCode;
}

const Breadcrumb = ({ customBreadcrumb, countryCode }: BreadcrumbProps) => {
  const pathname = usePathname();

  const directories =
    customBreadcrumb ||
    pathname.split("/").filter((item) => {
      return item !== "";
    });

  const isNotLink = ["features"];

  //   //* if cb is passed through Layout will replace actual pathname breadcrumb
  //   if (customBreadcrumb)
  //     return (
  //       <nav className="bg-grey-light absolute top-24 z-10 hidden w-full  text-white justify-center rounded-md md:flex  md:justify-between px-6 py-4">
  //         <ol className="flex list-none p-0 m-0">
  //           <li>
  //             <Link href={`/${countryCode}/`} className="hover:text-blue-700">
  //               <AiFillHome className="mr-2 w-4"></AiFillHome>
  //               {"DiDi"}
  //             </Link>
  //           </li>
  //           {customBreadcrumb.map((item, index) => (
  //             <li key={index}>
  //               <>
  //                 <span className="mx-2 ">
  //                   <AiOutlineRight className="w-2"></AiOutlineRight>
  //                 </span>

  //                 {index !== directories.length - 1 ? (
  //                   <Link href={item.link} className=" hover:text-blue-700">
  //                     {item.text}
  //                   </Link>
  //                 ) : (
  //                   item.text
  //                 )}
  //               </>
  //             </li>
  //           ))}
  //         </ol>
  //       </nav>
  //     );

  //* special rules for  EG
  return (
    <nav className="bg-grey-light absolute top-24 z-10 hidden w-full  text-white justify-center rounded-md md:flex  md:justify-between px-6 py-4">
      <ol className="flex list-none p-0 m-0">
        {directories.map((dir, index) => {
          let itemPath = dir.replace(/(-)|(_.*)/g, " ");
          if (countryCode == "eg") {
            switch (dir) {
              case "about-us":
                itemPath = "نبذة عنا";
                break;
              case "help-center":
                itemPath = "مركز المساعدة";
                break;
              case "rider":
                itemPath = "الراكب";
                break;
              case "driver":
                itemPath = "السائق";
                break;
              case "driver-starter-manual":
                itemPath = "دليل بدء شريك";
                break;
              default:
                itemPath = dir;
            }
          }

          if (index === 0) {
            return (
              <li key={index}>
                <Link href={`/${countryCode}/`} className="hover:text-blue-700">
                  <AiFillHome className="mr-2 w-4"></AiFillHome>
                  {"DiDi"}
                </Link>
              </li>
            );
          }

          return (
            <li key={index}>
              <>
                <span className="mx-2 ">
                  <AiOutlineRight className="w-2"></AiOutlineRight>
                </span>

                {index !== directories.length - 1 &&
                !isNotLink.includes(dir) ? (
                  <Link
                    href={"/" + directories.slice(0, index + 1).join("/") + "/"}
                    className=" hover:text-blue-700"
                  >
                    {itemPath}
                  </Link>
                ) : (
                  itemPath
                )}
              </>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
