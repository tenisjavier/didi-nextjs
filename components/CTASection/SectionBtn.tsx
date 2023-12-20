import React from "react";
import Btn from "../Btn";
import { BtnProps, BtnType } from "../Btn";

interface SectionBtnProps extends BtnProps {}

const SectionBtn = ({
  btnType,
  btnMode,
  btnLink,
  btnText,
}: SectionBtnProps) => {
  const btnGroup = {
    both: [
      {
        btnType: "pax",
        btnMode: btnMode,
        btnLink: btnLink,
        btnText: btnText,
      },
      {
        btnType: "drv",
        btnMode: btnMode,
        btnLink: btnLink,
        btnText: btnText,
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
          },
        ];
  console.log(btns);
  return btns.map((btn: any) => (
    <>
      <Btn
        btnType={btn.btnType}
        btnMode={btn.btnMode}
        btnLink={btn.btnLink}
        btnText={btn.btnText}
      ></Btn>
      <br></br>
    </>
  ));
};

export default SectionBtn;
