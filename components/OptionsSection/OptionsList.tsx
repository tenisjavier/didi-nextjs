"use client";
import React, { useState } from "react";
import Btn, { BtnMode, BtnType } from "@/components/Btn";
import Options from "@/components/OptionsSection/Options";
import OptionsBullets from "@/components/OptionsSection/OptionsBullets";
import { OptionsT, ImageType } from "@/typings";

interface OptionsListProps {
  optionsBulletTitle: string;
  optionsBulletDesc: string;
  options: OptionsT[];
  btnType: BtnType;
  btnMode: BtnMode;
  btnText?: string;
  btnLink?: string;
}

const OptionsList = ({
  options,
  optionsBulletTitle,
  optionsBulletDesc,
  btnType,
  btnMode,
  btnText,
  btnLink,
}: OptionsListProps) => {
  const [activeOption, setActiveOption] = useState(options[0].name);
  const handleChangeOption = (name: string) => {
    setActiveOption(name);
  };
  return (
    <>
      <div className="grid grid-cols-2 gap-4 items-center">
        {options.map((item, index) => (
          <Options
            key={index}
            name={item.name as string}
            title={item.title as string}
            image={item.image as ImageType}
            isActive={item.name === activeOption}
            onClick={handleChangeOption}
          />
        ))}
      </div>
      <div className="p-4 flex flex-col">
        <h3 className="text-orange-primary">{optionsBulletTitle}</h3>
        <p>{optionsBulletDesc}</p>
        {options?.map((item, index) => {
          const bullets =
            item.name === activeOption ? (
              <OptionsBullets key={index} bullets={item.bullets} />
            ) : null;
          return bullets;
        })}
        <Btn
          btnType={btnType}
          btnMode={btnMode}
          btnTextCenter
          btnText={btnText}
          btnLink={btnLink}
        ></Btn>
      </div>
    </>
  );
};

export default OptionsList;
