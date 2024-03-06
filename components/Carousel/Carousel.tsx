"use client";

import React, { useRef } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from "@/components/Banner";
import { CarouselT } from "@/typings";
import Image from "next/image";
import CTASection from "../CTASection";
import Card from "../Card";
import CardPay from "../CardPay";
import { reviewPrestamos } from "@/config/reviews/prestamos";
import textBreak from "@/utils/textBreak";

function NextArrow(props: any) {
  const { onClick, arrow, arrowColor, hasArrow } = props;
  if (!hasArrow) return <></>;
  return (
    <button
      className={`${arrowColor} before:content-[''] before:w-6 before:h-6 before:border-4 before:border-solid before:block before:border-l-0 before:border-b-0 before:rotate-45 before:rounded-bl-sm absolute z-50 right-5 top-1/2 transform -translate-y-1/2 text-4xl sm:text-2sm border-0 p-0 outline-0 bg-inherit cursor-pointer hover:font-bold m-0`}
      onClick={onClick}
    ></button>
  );
}

function PrevArrow(props: any) {
  const { onClick, arrow, arrowColor, hasArrow } = props;
  if (!hasArrow) return <></>;
  return (
    <button
      className={`${arrowColor} before:content-[''] before:w-6 before:h-6 before:border-4 before:border-solid before:block before:border-r-0 before:border-t-0 before:rotate-45 before:rounded-bl-sm absolute z-50 left-5 top-1/2 transform -translate-y-1/2 text-4xl sm:text-2sm border-0 p-0 outline-0 bg-inherit cursor-pointer hover:font-bold m-0`}
      onClick={onClick}
    ></button>
  );
}

const Carousel = (props: CarouselT) => {
  const {
    isAutoPlay,
    slides,
    carouselType,
    slidesToShow,
    slidesToScroll,
    images,
    arrowNext,
    arrowPrev,
    arrowColor,
    imagesMobile,
    slidesToShowMobile = 1,
    ctaSection,
    hasDots,
    hasArrows,
    maxWidth,
    title,
    cards,
    type,
    desc,
  } = props;

  let sliderRefMain = useRef<Slider>(null);
  let sliderRefMobile = useRef<Slider>(null);

  const toShow = slidesToShow ? slidesToShow : 1;
  const toScroll = slidesToScroll ? slidesToShow : 1;

  const breakpoint = 1079;

  let sliderContent;
  let sliderContentMobile;
  if (carouselType === "Banner") {
    sliderContent = slides?.map((sld, index) => {
      return (
        <div key={index}>
          <Banner {...sld}></Banner>
        </div>
      );
    });
  } else if (carouselType === "Images") {
    sliderContentMobile = imagesMobile?.map((img, index) => {
      return (
        <Image
          key={index}
          src={img.url}
          height={img.height || 400}
          width={img.width || 400}
          alt={img.description}
          className={`z-10 w-auto h-80 block lg:!hidden`}
        ></Image>
      );
    });
    sliderContent = images?.map((img, index) => {
      return (
        <Image
          key={index}
          src={img.url}
          height={img.height || 400}
          width={img.width || 400}
          alt={img.description}
          className={`z-10 w-full h-auto !hidden lg:!block`}
        ></Image>
      );
    });
  } else if (carouselType === "CTASection") {
    sliderContent = ctaSection?.map((cta, index) => {
      return <CTASection key={index} {...cta}></CTASection>;
    });
  } else if (carouselType === "Card") {
    if (type === "pay" && cards?.length === 0) {
      sliderContent = reviewPrestamos?.map((sld, index) => (
        <CardPay key={index} {...sld}></CardPay>
      ));
    } else {
      sliderContent = cards?.map((sld, index) => {
        if (type === "pay") {
          return <CardPay key={index} {...sld}></CardPay>;
        }
        return <Card key={index} {...sld}></Card>;
      });
    }
  }

  var settings: Settings = {
    dots: hasDots || false,
    arrows: hasArrows || true,
    infinite: true,
    autoplay: isAutoPlay,
    speed: 500,
    autoplaySpeed: 0,
    slidesToShow: toShow,
    slidesToScroll: toScroll,
    pauseOnHover: false,
    cssEase: "linear",
    nextArrow: (
      <NextArrow
        arrow={arrowNext}
        arrowColor={arrowColor}
        hasArrow={hasArrows && type !== "pay"}
      />
    ),
    prevArrow: (
      <PrevArrow
        arrow={arrowPrev}
        arrowColor={arrowColor}
        hasArrow={hasArrows && type !== "pay"}
      />
    ),
    dotsClass: "slick-dots flex justify-center z-50 !bottom-10",

    responsive: [
      {
        breakpoint,
        settings: {
          slidesToShow: slidesToShowMobile,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const next = () => {
    sliderRefMain?.current?.slickNext();
  };
  const previous = () => {
    sliderRefMain?.current?.slickPrev();
  };

  return (
    <div
      style={{
        maxWidth: `${maxWidth}px`,
        margin: "auto",
      }}
    >
      <div
        className={`flex py-16 ${
          type === "pay" ? "justify-between" : "justify-center"
        }  items-center`}
      >
        {title && (
          <h2
            className={`${
              type === "pay" ? "text-left" : "text-center"
            } text-3xl md:text-4xl font-bold `}
          >
            {textBreak(title)}
          </h2>
        )}
        {hasArrows && type === "pay" && (
          <div className="hidden lg:flex">
            <button
              className="m-4 text-4xl border-0 p-0 outline-0 bg-inherit cursor-pointer hover:font-bold"
              onClick={next}
            >
              ←
            </button>
            <button
              className="m-4 text-4xl border-0 p-0 outline-0 bg-inherit cursor-pointer hover:font-bold"
              onClick={previous}
            >
              →
            </button>
          </div>
        )}
      </div>
      {desc && (
        <p
          className={`${
            type === "pay" ? "text-left" : "text-center"
          } text-base`}
        >
          {textBreak(desc)}
        </p>
      )}
      <Slider ref={sliderRefMain} {...settings}>
        {sliderContent && sliderContent}
      </Slider>
      <Slider ref={sliderRefMobile} {...settings}>
        {sliderContentMobile && sliderContentMobile}
      </Slider>
    </div>
  );
};

export default Carousel;
