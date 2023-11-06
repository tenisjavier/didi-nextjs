import React from "react";
import { PageComponent } from "@/typings";
import {
  fetchCTASectionById,
  fetchColumnSectionById,
  fetchCarouselSectionById,
} from "@/utils/db";
import CTASection from "@/components/CTASection";
import ColumnSection from "@/components/ColumnSection";
import CarouselSection from "@/components/CarouselSection";

interface BuilderComponentProps {
  components: PageComponent[];
}

//? return the JSX array of components to show on the opage
const BuilderComponent = async ({ components }: BuilderComponentProps) => {
  const JSXComponents = [];
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
    default:
      return null;
  }
};

export default BuilderComponent;
