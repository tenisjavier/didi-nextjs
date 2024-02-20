import React from "react";
import { AccordionSectionT, ColumnSectionT, PageComponent, TextParamnsT } from "@/typings";
import {
  fetchCTASectionById,
  fetchColumnSectionById,
  fetchCarouselSectionById,
  fetchAccordionSectionById,
  fetchBannerById,
  fetchOptionsSectionById,
  fetchColumnImageSectionById,
  fetchCarouselById,
  fetchListSectionById,
} from "@/utils/db";
import CTASection from "@/components/CTASection";
import ColumnSection from "@/components/ColumnSection";
import CarouselSection from "@/components/CarouselSection";
import AccordionSection from "@/components/AccordionSection";
import Banner from "@/components/Banner";
import OptionsSection from "@/components/OptionsSection";
import ColumnImageSection from "@/components/ColumnImageSection";
import Carousel from "@/components/Carousel/Carousel";
import ListSection from "@/components/ListSection";
import replaceTextParams from "@/utils/replaceTextParams";

interface BuilderComponentProps {
  components: PageComponent[];
  params?: string | undefined;
  searchParams?: { [key: string]: string | string[] | undefined };
  textParams?: TextParamnsT;
}

//? return the JSX array of components to show on the opage
const BuilderComponent = async ({
  components,
  params,
  searchParams,
  textParams
}: BuilderComponentProps) => {
  const JSXComponents = [];
  for (const c of components) {
    const component = await fetchComponent(
      c.__typename,
      c.id,
      params,
      searchParams,
      textParams
    );
    JSXComponents.push(component);
  }

  return JSXComponents;
};

//? function that return the correct component from db fetch depending on type
const fetchComponent = async (
  type: string,
  id: string,
  params: string | undefined,
  searchParams: { [key: string]: string | string[] | undefined } | undefined,
  textParams?: TextParamnsT
) => {
  switch (type) {
    case "CtaSection":
      let ctaSectionProps = await fetchCTASectionById(id);

      if (textParams?.ctaSectionParams) {
        ctaSectionProps = replaceTextParams(ctaSectionProps, textParams.ctaSectionParams);
      }

      return <CTASection {...ctaSectionProps}></CTASection>;
    case "ColumnSection":
      const page =
        typeof searchParams?.page === "string" ? Number(searchParams.page) : 1;

      let columnSectionProps = await fetchColumnSectionById(id, {
        page: page,
        limit: 12,
      });

      if (textParams?.columnSectionParams) {
        columnSectionProps = replaceTextParams(columnSectionProps, textParams.columnSectionParams) as ColumnSectionT;
      }

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
      let accordionSectionProps = await fetchAccordionSectionById(id);

      if (textParams?.accordionSectionParams) {
        accordionSectionProps = replaceTextParams(accordionSectionProps, textParams.accordionSectionParams) as AccordionSectionT
      }

      return <AccordionSection {...accordionSectionProps}></AccordionSection>;
    case "Banner":
      const bannerProps = await fetchBannerById(id);
      return <Banner {...bannerProps}></Banner>;
    case "OptionsSection":
      const optionsSectionProps = await fetchOptionsSectionById(id);
      return <OptionsSection {...optionsSectionProps}></OptionsSection>;
    case "ListSection":
      const listSectionProps = await fetchListSectionById(id);
      return <ListSection {...listSectionProps}></ListSection>;

    default:
      return null;
  }
};

export default BuilderComponent;
