import React from "react";
import textHighlighter from "@/utils/textHighlighter";
import Image from "next/image";

type CreditCardCashBackBullets = {
  text?: string;
  icon?: string;
  percentCashBack?: string;
};

export interface SectionCreditCardCashBackBulletsProps {
  bullets?: string[] | null
}

const SectionCreditCardCashBackBullets: React.FC<
  SectionCreditCardCashBackBulletsProps
> = ({
  bullets
}) => {
    const creditCardCashBackBullets: CreditCardCashBackBullets[] = bullets?.map((bullet) => {
      const text = bullet?.split(" ")?.filter((_, index) => index !== 0).join(" ")
      const percentCashBack = bullet?.[0]?.split("")?.[0]

      return {
        text,
        icon: "",
        percentCashBack
      }
    }) || []

    return (
      <ul className="flex flex-col gap-10 list-none m-0 p-0 px-4">
        {creditCardCashBackBullets?.map((bullet, index) => (
          <li
            className="lg:w-full flex gap-4 rounded-3xl lg:pt-10 lg:px-8 lg:pb-6 pt-8 px-4 pb-2 relative"
            style={{
              border: "1px solid #D7D7D7",
            }}
            key={index}
          >
            {bullet.text && (
              <p className="text-xl font-normal lg:text-gray-median text-white">
                {textHighlighter({
                  text: bullet.text,
                  style: "font-bold text-white lg:!text-orange-primary"
                })}
              </p>
            )}
            {bullet.percentCashBack && (
              <span className="text-7xl text-white lg:text-orange-primary absolute -top-8 lg:bg-white bg-orange-primary">
                {bullet.percentCashBack}
                <span className="text-3xl top-10">%</span>
              </span>
            )}
            {bullet.icon && (
              <div className="w-8 p-3 bg-white absolute -right-1 top-2/4 transform -translate-y-2/4">
                <Image
                  src={`/icon/${bullet.icon}.svg`}
                  alt={"icon tarjeta"}
                  className="w-8"
                />
              </div>
            )}
          </li>
        ))}
      </ul>
    );
  };

export default SectionCreditCardCashBackBullets;
