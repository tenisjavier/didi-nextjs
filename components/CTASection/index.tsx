import React from "react";
import Image from "next/image";
import Btn from "@/components/Btn";
import SectionBullets from "@/components/CTASection/SectionBullets";
import SectionList from "@/components/CTASection/SectionList";
import SectionCreditCardCashBackBullets, {
  SectionCreditCardCashBackBulletsProps,
} from "@/components/CTASection/SectionCreditCardCashBackBullets";
import textHighlighter from "@/utils/textHighlighter";
import { CTASectionT } from "@/typings";

const CTASection = (props: CTASectionT) => {
  const {
    isHero,
    title,
    desc,
    textColor,
    bgImage,
    mobileBgImage,
    bgVideo,
    imageRawRender,
    bgColor,
    image,
    rounded,
    bullets,
    list,
    customBulletIcon,
    icon,
    btnType,
    btnText,
    btnLink,
    btnMode,
    reverse,
    btnModeSecondary,
    RTL,
    descBeforeBullets = true,
    // bulletsCreditCard,
    bulletsConfigColumn = "default",
    borderColor,
    textHighlighterConfig,
    hasTextHighlighterBullets,
    whiteRight,
    mobileTitlePosition,
    brightness,
  } = props;

  const isRtl = RTL ? "rtl" : "ltr";
  const textDir = RTL ? "text-right" : "text-left";
  const margin = RTL ? "ml-4" : "mr-4";
  const bgImageStyle = mobileBgImage
    ? `hidden !absolute z-0 h-full w-full md:block object-cover ${
        brightness && brightness
      }}`
    : `!absolute z-0 h-full w-full md:block object-cover ${
        brightness && brightness
      }`;
  const mobileBgImageStyle = `!absolute z-0 h-full w-full md:!hidden object-cover`;
  const imageStyle = "z-10 m-4 w-80 h-80 lg:w-100 lg:h-100 " + rounded;
  const getTitleElement = () => {
    if (isHero) {
      return (
        <h1 className={`text-4xl font-bold md:text-5xl mt-0`}>
          {title &&
            title.split("\n").map((str, index) => (
              <span key={index}>
                {textHighlighterConfig?.hasTextHighlighter
                  ? textHighlighter(str, textHighlighterConfig.style)
                  : str}
                <br />
              </span>
            ))}
        </h1>
      );
    } else {
      return (
        <h2 className="font-bold text-3xl md:text-4xl">
          {title &&
            title.split("\n").map((str, index) => (
              <span key={index}>
                {textHighlighterConfig?.hasTextHighlighter
                  ? textHighlighter(str, textHighlighterConfig.style)
                  : str}
                <br />
              </span>
            ))}
        </h2>
      );
    }
  };

  const renderSectionDesc = () => {
    return (
      <p className={`mb-10 text-lg`}>
        {desc &&
          desc.split("\n").map((str, index) => (
            <span key={index}>
              {textHighlighterConfig?.hasTextHighlighter
                ? textHighlighter(str, textHighlighterConfig.style)
                : str}
              <br />
            </span>
          ))}
      </p>
    );
  };

  return (
    <section
      style={{ direction: isRtl }}
      className={`relative flex min-h-[44rem] w-full items-center justify-center overflow-hidden ${
        bgColor && bgColor
      } ${borderColor && "border-solid border border-" + borderColor} `}
    >
      <div
        className={`${
          whiteRight ? "white-right" : "container"
        }  mx-auto flex w-full lg:flex-nowrap items-center justify-center py-12 ${
          reverse && isHero
            ? "flex-row-reverse flex-wrap-reverse pt-28 lg:pt-12 "
            : "flex-wrap "
        } ${reverse ? "flex-row-reverse" : ""} 
        ${
          image || imageRawRender || bulletsConfigColumn === "singleColumn"
            ? whiteRight
              ? "lg:justify-center"
              : "lg:justify-between"
            : "lg:justify-start"
        }`}
      >
        {image && (
          <Image
            src={image.url}
            alt={image.description}
            className={imageStyle}
            width={450}
            height={450}
          />
        )}
        {bullets && bulletsConfigColumn === "singleColumn" && (
          <SectionBullets
            bullets={bullets}
            customBulletIcon={customBulletIcon}
            margin={margin}
            textDir={textDir}
            icon={icon}
            hasTextHighlighter={hasTextHighlighterBullets}
          />
        )}

        {/* {bulletsCreditCard && bulletsConfigColumn === "singleColumn" && (
          <SectionCreditCardCashBackBullets
            creditCardCashBackBullets={
              bulletsCreditCard.creditCardCashBackBullets
            }
          />
        )} */}

        {imageRawRender && imageRawRender}

        <div
          className={`${
            mobileTitlePosition === "top" ? "absolute top-24 md:static" : ""
          } w-11/12 mb-8 lg:mt-16 lg:w-1/2 text-${textColor} z-10 xl:${textDir}`}
        >
          {getTitleElement()}
          <div
            className={`flex ${
              descBeforeBullets ? "flex-col" : "flex-col-reverse"
            }`}
          >
            {desc && renderSectionDesc()}

            {bullets && bulletsConfigColumn === "default" && (
              <SectionBullets
                bullets={bullets}
                customBulletIcon={customBulletIcon}
                margin={margin}
                textDir={textDir}
                icon={icon}
                hasTextHighlighter={hasTextHighlighterBullets}
              />
            )}
            {/* {bulletsCreditCard && bulletsConfigColumn === "default" && (
              <SectionCreditCardCashBackBullets
                creditCardCashBackBullets={
                  bulletsCreditCard.creditCardCashBackBullets
                }
              />
            )} */}
          </div>
          {list && <SectionList list={list} />}
          <div className="text-center lg:text-left">
            <Btn
              btnType={btnType}
              btnMode={btnMode}
              btnModeSecondary={btnModeSecondary}
              btnLink={btnLink}
              btnText={btnText}
            />
          </div>
        </div>
      </div>

      {bgImage && (
        <Image
          src={bgImage.url}
          alt={bgImage.description}
          className={bgImageStyle}
          fill
        />
      )}

      {mobileBgImage && (
        <Image
          src={mobileBgImage.url}
          alt={mobileBgImage.description}
          className={mobileBgImageStyle}
          fill
        />
      )}

      {bgVideo && bgVideo}
    </section>
  );
};

export default CTASection;
