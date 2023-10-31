import React from "react";
import { CTASectionT, ColumnSectionT, PageComponent } from "@/typings";
import { fetchCTASectionById, fetchColumnSectionById } from "@/utils/db";
import CTASection from "@/components/CTASection";
import ColumnSection from "@/components/ColumnSection";

interface BuilderComponentProps {
  components: PageComponent[];
}

//? return the JSX of the components to show on the opage
const BuilderComponent = async ({ components }: BuilderComponentProps) => {
  const JSXComponents = [];
  for (const c of components) {
    const props = await fetchComponent(c.__typename, c.id);
    switch (c.__typename) {
      case "CtaSection":
        JSXComponents.push(<CTASection {...props}></CTASection>);
        break;
      case "ColumnSection":
        console.log(props);
        JSXComponents.push(<ColumnSection {...props}></ColumnSection>);
        break;
      default:
        break;
    }
  }

  return JSXComponents;
};

//? function that return the correct db function to use depending on type
const fetchComponent = async (type: string, id: string) => {
  switch (type) {
    case "CtaSection":
      return await fetchCTASectionById(id);
    case "ColumnSection":
      return await fetchColumnSectionById(id);
    default:
      return <div>default</div>;
  }
};

export default BuilderComponent;
