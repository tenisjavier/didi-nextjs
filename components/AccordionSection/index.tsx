import React from "react";
import Accordion from "@/components/AccordionSection/Accordion";
import { AccordionSectionT } from "@/typings";
import textBreak from "@/utils/textBreak";

const AccordionSection = ({
  items,
  bgColor,
  bgAccordionColor,
  title,
  desc,
  textColor,
  textAccordionColor,
  isClosed,
  RTL,
  isFaq,
}: AccordionSectionT) => {
  let dir: any = "ltr";
  let textDir = "text-left";

  if (RTL) {
    dir = "rtl";
    textDir = "text-right";
  }
  const directionStyle: React.CSSProperties = {
    direction: dir,
  };

  return (
    <section style={directionStyle} className={`${bgColor} text-${textColor}`}>
      <div className="container py-8 flex flex-col justify-center">
        {title && (
          <h2 className={`text-4xl md:${textDir} text-left`}>
            {textBreak(title, textColor)}
          </h2>
        )}
        {desc && (
          <p className={`text-left md:${textDir}`}>
            {textBreak(desc, textColor)}
          </p>
        )}
        <div className={`flex flex-wrap justify-around `}>
          {items?.map((item, index) => {
            return (
              <Accordion
                {...item}
                bgColor={bgAccordionColor}
                textColor={textAccordionColor}
                key={index}
                isClosed={isClosed}
                isFaq={isFaq}
              ></Accordion>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AccordionSection;
