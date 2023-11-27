'use client';

import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useScreenSize from "@/hooks/useScreenSize";
import Banner from "@/components/Banner";
import { CarouselT } from "@/typings";
import Image from "next/image";
import CTASection from "../CTASection";

function NextArrow(props: any) {
  const { onClick, arrow, arrowColor } = props;
  return (
    <button
      className={`${arrowColor} before:content-[''] before:w-6 before:h-6 before:border-4 before:border-solid before:block before:border-l-0 before:border-b-0 before:rotate-45 before:rounded-bl-sm absolute z-50 right-5 top-1/2 transform -translate-y-1/2 text-4xl sm:text-2sm border-0 p-0 outline-0 bg-inherit cursor-pointer hover:font-bold m-0`}
      onClick={onClick}
    >
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick, arrow, arrowColor } = props;
  return (
    <button
      className={`${arrowColor} before:content-[''] before:w-6 before:h-6 before:border-4 before:border-solid before:block before:border-r-0 before:border-t-0 before:rotate-45 before:rounded-bl-sm absolute z-50 left-5 top-1/2 transform -translate-y-1/2 text-4xl sm:text-2sm border-0 p-0 outline-0 bg-inherit cursor-pointer hover:font-bold m-0`}
      onClick={onClick}
    >

    </button>
  );
}

const Carousel = (props: CarouselT) => {
  const {
    speedAutoPlay,
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
    imageStyle,
    slidesToShowMobile = 1,
    ctaSection,
    hasDots,
    hasArrows,
    maxWidth
  } = props;


  const screenSize = useScreenSize()

  const toShow = slidesToShow ? slidesToShow : 1;
  const toScroll = slidesToScroll ? slidesToShow : 1;

  const breakpoint = 1079;

  const isMobile = imagesMobile && imagesMobile.length > 0 && screenSize <= breakpoint

  let sliderContent;

  if (carouselType === "Banner") {
    sliderContent = slides?.map((sld, index) => {
      return (
        <div key={index}>
          <Banner {...sld}></Banner>
        </div>
      );
    });
  } else if (carouselType === "Images") {
    const imagesData = isMobile ? imagesMobile : images
    sliderContent = imagesData?.map((img, index) => {
      return (
        <Image key={index} src={img.url} height={img.height || 1200} width={img.width || 1200} alt={img.description} className={`${imageStyle} z-10 w-full`}></Image>
      );
    });
  } else if (carouselType === "CTASection") {
    sliderContent = ctaSection?.map((cta, index) => {
      return (
        <CTASection key={index}  {...cta}></CTASection>
      );
    })
  }

  var settings: Settings = {
    dots: hasDots || false,
    arrows: hasArrows || true,
    infinite: true,
    autoplay: isAutoPlay,
    speed: speedAutoPlay,
    autoplaySpeed: 0,
    slidesToShow: toShow,
    slidesToScroll: toScroll,
    pauseOnHover: false,
    cssEase: "linear",
    nextArrow: <NextArrow arrow={arrowNext} arrowColor={arrowColor} />,
    prevArrow: <PrevArrow arrow={arrowPrev} arrowColor={arrowColor} />,
    dotsClass: 'slick-dots flex justify-center z-50 !bottom-10',

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

  return (
    <Slider className={`max-w-[${maxWidth}px] m-auto`} {...settings}>{sliderContent && sliderContent}</Slider>
  )
};

export default Carousel;
