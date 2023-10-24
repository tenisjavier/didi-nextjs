import React from "react";
import { PageComponent } from "@/typings";
import { fetchCTASectionById } from "@/utils/db";
import CTASection from "./CTASection";
import { CTASectionT } from "@/typings";

interface BuilderComponentProps {
  components: PageComponent[];
}

const BuilderComponent = async ({ components }: BuilderComponentProps) => {
  const JSXComponents = [];
  for (const c of components) {
    const section = await fetchComponent(c.__typename, c.id);
    console.log(c);
    const props: CTASectionT = section;
    JSXComponents.push(<CTASection {...props}></CTASection>);
  }
  return JSXComponents;
};

//? function that return the correct db function to use depending on type
const fetchComponent = async (type: string, id: string) => {
  switch (type) {
    case "CtaSection":
      return await fetchCTASectionById(id);
    case "ColumnSection":
      return <div>list-section</div>;
    default:
      return <div>default</div>;
  }
};

export default BuilderComponent;
