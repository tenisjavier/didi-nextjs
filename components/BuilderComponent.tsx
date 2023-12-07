import React from "react";
import { PageComponent } from "@/typings";
import {
  fetchCTASectionById,
  fetchColumnSectionById,
  fetchCarouselSectionById,
  fetchAccordionSectionById,
  fetchBannerById,

  fetchOptionsSectionById,

  fetchColumnImageSectionById,
  fetchCarouselById

} from "@/utils/db";
import CTASection from "@/components/CTASection";
import ColumnSection from "@/components/ColumnSection";
import CarouselSection from "@/components/CarouselSection";
import AccordionSection from "@/components/AccordionSection";
import Banner from "@/components/Banner";
import OptionsSection from "@/components/OptionsSection";
import ColumnImageSection from "@/components/ColumnImageSection";
import Carousel from "@/components/Carousel/Carousel";


interface BuilderComponentProps {
  components: PageComponent[];
}

//? return the JSX array of components to show on the opage
const BuilderComponent = async ({ components }: BuilderComponentProps) => {
  const JSXComponents = [];
  console.log('components', components);
  for (const c of components) {
    const component = await fetchComponent(c.__typename, c.id);
    JSXComponents.push(component);
  }

  return JSXComponents;
};

//? function that return the correct component from db fetch depending on type
const fetchComponent = async (type: string, id: string) => {
  console.log(type);
  switch (type) {
    case "CtaSection":
      const ctaSectionProps = await fetchCTASectionById(id);
      return <CTASection {...ctaSectionProps}></CTASection>;
    case "ColumnSection":
      const columnSectionProps = await fetchColumnSectionById(id);
      return <ColumnSection {...columnSectionProps}></ColumnSection>;
    case "ColumnImageSection":
      const columnImageProps = await fetchColumnImageSectionById(id);
      return <ColumnImageSection {...columnImageProps}></ColumnImageSection>;
    case "CarouselSection":
      const carouselSectionProps = await fetchCarouselSectionById(id);
      return <CarouselSection {...carouselSectionProps}></CarouselSection>;
    case "Carousel":
      const carouselProps = await fetchCarouselById(id);
      return <Carousel {...carouselProps}></Carousel>;
    case "AccordionSection":
      const accordionSectionProps = await fetchAccordionSectionById(id);
      return <AccordionSection {...accordionSectionProps}></AccordionSection>;
    case "Banner":
      const bannerProps = await fetchBannerById(id);
      return <Banner {...bannerProps}></Banner>;
    case "OptionsSection":
      const optionsSectionProps = await fetchOptionsSectionById(id);
      return <OptionsSection {...optionsSectionProps}></OptionsSection>;

    default:
      return null;
  }
};

export default BuilderComponent;


