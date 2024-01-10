import React from "react";
import Btn from "../Btn";
import { BtnProps, BtnType } from "../Btn";

interface SectionBtnProps extends BtnProps { }

const SectionBtn = ({
  btnType,
  btnMode,
  btnLink,
  btnText,
  btnModeSecondary,
}: SectionBtnProps) => {
  const btnGroup = {
    both: [
      {
        btnType: "pax",
        btnMode: btnMode,
        btnLink: btnLink,
        btnText: btnText,
        btnModeSecondary,
      },
      {
        btnType: "drv",
        btnMode: btnMode,
        btnLink: btnLink,
        btnText: btnText,
        btnModeSecondary,
      },
    ],
  };

  const btns =
    btnType === "both"
      ? btnGroup[btnType]
      : [
        {
          btnType: btnType,
          btnMode: btnMode,
          btnLink: btnLink,
          btnText: btnText,
          btnModeSecondary
        },
      ];
  return btns.map((btn: any, index: number) => (
    <span key={index}>
      <Btn
        btnType={btn.btnType}
        btnMode={btn.btnMode}
        btnLink={btn.btnLink}
        btnText={btn.btnText}
        btnModeSecondary={btn.btnModeSecondary}
      ></Btn>
      <br></br>
    </span>
  ));
};

export default SectionBtn;
