import React from "react";
import OptionsList from "@/components/OptionsSection/OptionsList";
import { OptionsSectionT, OptionsT } from "@/typings";
import textBreak from "@/utils/textBreak";

const OptionsSection = ({
  title,
  desc,
  bgColor,
  textColor,
  optionsTitle,
  optionsBulletTitle,
  optionsBulletDesc,
  options,
  btnType,
  btnMode,
  btnText,
  btnLink,
}: OptionsSectionT) => {
  return (
    <section
      className={`flex justify-center items-center py-20 ${bgColor && bgColor
        } ${textColor && textColor}`}
    >
      <div className="flex justify-center container flex-col">
        {title && (
          <h2 className="text-4xl">{textBreak(title, textColor)}</h2>
        )}
        {desc && <p className="text-center">{textBreak(desc, textColor)}</p>}
        {optionsTitle && (
          <h5 className="text-lg font-bold text-orange-primary">
            {optionsTitle}
          </h5>
        )}
        <div className="flex lg:flex-row flex-col justify-between gap-6">
          <OptionsList
            options={options as OptionsT[]}
            optionsBulletTitle={optionsBulletTitle as string}
            optionsBulletDesc={optionsBulletDesc as string}
            btnType={btnType}
            btnMode={btnMode}
            btnText={btnText}
            btnLink={btnLink}
          ></OptionsList>
        </div>
      </div>
    </section>
  );
};

export default OptionsSection;
