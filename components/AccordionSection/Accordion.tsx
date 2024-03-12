"use client";
import React, { useState, useRef } from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import RichContent from "@/components/RichContent";
import ConditionalWrapper from "@/utils/conditionalWrapper";
import { AccordionT } from "@/typings";

const Accordion = ({
  title,
  content,
  slug,
  bgColor,
  textColor,
  isClosed,
  isFaq,
}: AccordionT) => {
  const [isOpen, setIsOpen] = useState(!isClosed);
  const [height, setHeight] = useState("0px");
  const content1: any = useRef(null);

  if (isOpen === true && height === "0px") {
    setHeight("50");
  }

  const closeClass =
    "text-lg bg-gray-200 text-gray-primary py-0 w-full px-4 md:px-20 transition-all duration-700 overflow-hidden";
  const openClass = `bg-white text-gray-primary w-full py-5 px-4 md:px-20 transition-all duration-700 text-lg overflow-hidden border-none`;
  const toggle = () => {
    setIsOpen(!isOpen);
    setHeight(isOpen ? `0px` : `${content1.current.scrollHeight + 50}px`);
  };
  return (
    <section id={slug} className="w-full">
      <ConditionalWrapper
        condition={isFaq}
        wrapper={(children) => (
          <div
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            {children}
          </div>
        )}
      >
        <>
          <div
            aria-hidden="true"
            className={`mt-6 flex w-full cursor-pointer items-center justify-between rounded  border-solid border-gray-light px-10 lg:px-20 ${
              isOpen ? "bg-white border-none" : bgColor
            }`}
            onClick={() => toggle()}
          >
            <h3
              className={`text-${textColor} text-md md:text-2xl`}
              itemProp="name"
            >
              {title}
            </h3>
            <div className={`text-${textColor} text-xl w-6 ml-4`}>
              {isOpen ? (
                <AiFillMinusCircle></AiFillMinusCircle>
              ) : (
                <AiFillPlusCircle></AiFillPlusCircle>
              )}
            </div>
          </div>
          <div
            className={`accordion ${isOpen ? openClass : closeClass}`}
            style={{ maxHeight: height }}
            ref={content1}
          >
            <ConditionalWrapper
              condition={isFaq}
              wrapper={(children) => (
                <div
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div itemProp="text">{children}</div>
                </div>
              )}
            >
              <>
                {/* {documentToReactComponents(content.json)} */}
                {content && <RichContent richContent={content}></RichContent>}
              </>
            </ConditionalWrapper>
          </div>
        </>
      </ConditionalWrapper>
    </section>
  );
};

export default Accordion;
