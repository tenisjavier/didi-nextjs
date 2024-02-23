import React from "react";
import ListItem from "@/components/ListSection/ListItem";
import { ListSectionT } from "@/typings";
import textBreak from "@/utils/textBreak";

const ListSection = ({
  title,
  desc,
  items,
  bgColor,
  textColor,
}: ListSectionT) => {
  return (
    <section
      className={`container text-${textColor} ${bgColor} py-12 text-left w-full mx-auto`}
    >
      {title && (
        <h2 className="text-3xl ">{textBreak(title, textColor)}</h2>
      )}
      {desc && (
        <p>{textBreak(desc, textColor)}</p>
      )}
      <ul
        className={`m-0 p-0 my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 lg:gap-2 w-full mx-auto items-center justify-center list-none`}
      >
        {items &&
          items.map((item, index) => {
            return <ListItem {...item} key={index}></ListItem>;
          })}
      </ul>
    </section>
  );
};

export default ListSection;
