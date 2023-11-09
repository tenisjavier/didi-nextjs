import React from "react";
import { PageComponent } from "@/typings";
import {
  fetchCTASectionById,
  fetchColumnSectionById,
  fetchCarouselSectionById,
  fetchAccordionSectionById,
  fetchBannerById,
} from "@/utils/db";
import CTASection from "@/components/CTASection";
import ColumnSection from "@/components/ColumnSection";
import CarouselSection from "@/components/CarouselSection";
import AccordionSection from "@/components/AccordionSection";
import Banner from "@/components/Banner";

interface BuilderComponentProps {
  components: PageComponent[];
}

//? return the JSX array of components to show on the opage
const BuilderComponent = async ({ components }: BuilderComponentProps) => {
  const JSXComponents = [];
  console.log(components);
  for (const c of components) {
    const component = await fetchComponent(c.__typename, c.id);
    JSXComponents.push(component);
  }

  return JSXComponents;
};

//? function that return the correct component from db fetch depending on type
const fetchComponent = async (type: string, id: string) => {
  switch (type) {
    case "CtaSection":
      const ctaSectionProps = await fetchCTASectionById(id);
      return <CTASection {...ctaSectionProps}></CTASection>;
    case "ColumnSection":
      const columnSectionProps = await fetchColumnSectionById(id);
      return <ColumnSection {...columnSectionProps}></ColumnSection>;
    case "CarouselSection":
      const carouselSectionProps = await fetchCarouselSectionById(id);
      return <CarouselSection {...carouselSectionProps}></CarouselSection>;
    case "AccordionSection":
      const accordionSectionProps = await fetchAccordionSectionById(id);
      return <AccordionSection {...accordionSectionProps}></AccordionSection>;
    case "Banner":
      const bannerProps = await fetchBannerById(id);
      return <Banner {...bannerProps}></Banner>;
    default:
      return null;
  }
};

export default BuilderComponent;
