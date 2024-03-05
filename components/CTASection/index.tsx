import React from "react";
import Image from "next/image";
import SectionBullets from "@/components/CTASection/SectionBullets";
import SectionList from "@/components/CTASection/SectionList";
import SectionBtn from "./SectionBtn";
import SectionCreditCardCashBackBullets from "@/components/CTASection/SectionCreditCardCashBackBullets";
import { CTASectionT } from "@/typings";
import textBreak from "@/utils/textBreak";

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
    RTL,
    descBeforeBullets = true,
    bulletsConfigColumn = "default",
    borderColor,
    whiteRight,
    mobileTitlePosition,
    brightness,
    type,
    btnPhoneNumber,
    btnWhatsAppNumber,
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
  const imageStyle = `z-10 h-auto lg:w-100 m-4 mb-16 w-80 ` + rounded;

  const getTitleElement = () => {
    if (isHero) {
      return (
        <>
          {title && (
            <h1
              className={`text-4xl font-bold md:text-5xl mt-0 max-lg:text-center `}
            >
              {textBreak(title, textColor)}
            </h1>
          )}
        </>
      );
    } else {
      return (
        <>
          {title && (
            <h2 className="font-bold text-3xl md:text-4xl max-lg:text-center ">
              {textBreak(title, textColor)}
            </h2>
          )}
        </>
      );
    }
  };

  const renderSectionDesc = () => {
    return (
      <>
        {desc && (
          <p
            className={`mb-10 text-lg max-lg:text-center ${
              bulletsConfigColumn === "singleColumn" ? "w-11/12 lg:w-1/2" : ""
            }`}
          >
            {textBreak(desc, textColor)}
          </p>
        )}
      </>
    );
  };

  return (
    <section
      style={{ direction: isRtl }}
      className={`relative flex ${
        isHero ? "max-lg:min-h-[54rem]" : "min-h-[44rem]"
      } min-h-[44rem] w-full items-center justify-center overflow-hidden ${
        bgColor && bgColor
      } ${borderColor && "border-solid border border-" + borderColor} `}
    >
      <div
        className={`${
          whiteRight ? "white-right" : "container"
        }  mx-auto flex w-full lg:flex-nowrap items-center justify-center ${
          reverse && isHero
            ? "flex-row-reverse flex-wrap-reverse pt-28 lg:pt-12 lg:pb-12 "
            : "flex-wrap "
        } ${reverse ? "flex-row-reverse" : ""} ${
          bulletsConfigColumn === "singleColumn"
            ? "flex-col-reverse lg:flex-row-reverse"
            : ""
        } ${isHero && image ? "lg:pt-5" : ""} 
        ${
          image || imageRawRender || bulletsConfigColumn === "singleColumn"
            ? whiteRight
              ? "lg:justify-center"
              : "lg:justify-between"
            : "lg:justify-start"
        } text-${textColor}`}
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
        {type !== "cashback" &&
          bullets &&
          bulletsConfigColumn === "singleColumn" && (
            <SectionBullets
              bullets={bullets}
              customBulletIcon={customBulletIcon}
              margin={margin}
              textDir={textDir}
              icon={icon}
            />
          )}

        {type === "cashback" && bulletsConfigColumn === "singleColumn" && (
          <SectionCreditCardCashBackBullets bullets={bullets} />
        )}

        {imageRawRender && imageRawRender}

        <div
          className={`${
            mobileTitlePosition === "top" ? "absolute top-24 md:static" : ""
          } ${
            isHero && image ? "mb-0" : "mb-8"
          } w-11/12 lg:mt-10 lg:w-1/2 text-${textColor} z-10 xl:${textDir}`}
        >
          {getTitleElement()}
          <div
            className={`flex ${
              descBeforeBullets ? "flex-col" : "flex-col-reverse"
            }`}
          >
            {desc && renderSectionDesc()}

            {type !== "cashback" &&
              bullets &&
              bulletsConfigColumn !== "singleColumn" && (
                <SectionBullets
                  bullets={bullets}
                  customBulletIcon={customBulletIcon}
                  margin={margin}
                  textDir={textDir}
                  icon={icon}
                />
              )}

            {type === "cashback" && bulletsConfigColumn !== "singleColumn" && (
              <SectionCreditCardCashBackBullets bullets={bullets} />
            )}
          </div>
          {list && <SectionList list={list} />}

          {btnType || btnMode || btnLink || btnText ? (
            <div className="text-center lg:text-left">
              <SectionBtn
                btnType={btnType}
                btnMode={btnMode}
                btnLink={btnLink}
                btnText={btnText}
              ></SectionBtn>
              {btnPhoneNumber || btnWhatsAppNumber ? (
                <div
                  className={`mt-10 flex items-center gap-7 justify-center lg:pl-4 pl-0 lg:justify-start`}
                >
                  {btnPhoneNumber ? (
                    <a href={`tel:${btnPhoneNumber}`} target="_blank">
                      <Image
                        alt={"Phone Number"}
                        className="w-9 h-9"
                        src="/icons/phone.png"
                        height={50}
                        width={50}
                      />
                    </a>
                  ) : (
                    <></>
                  )}

                  {btnWhatsAppNumber ? (
                    <a
                      href={`https://wa.me/${btnWhatsAppNumber}`}
                      target="_blank"
                    >
                      <Image
                        alt={"WhatsApp Number"}
                        className="w-9 h-9"
                        src="/icons/whatsapp.png"
                        height={50}
                        width={50}
                      />
                    </a>
                  ) : (
                    <></>
                  )}
                </div>
              ) : (
                <></>
              )}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>

      {bgImage && (
        <Image
          src={bgImage.url}
          alt={bgImage.description}
          className={bgImageStyle}
          fill
          sizes="100vw"
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
