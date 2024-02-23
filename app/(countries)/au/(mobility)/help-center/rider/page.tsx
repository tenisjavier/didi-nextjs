import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Help Center Rider | DiDi Australia",
  description: "FAQs for DiDi riders.",
  alternates: {
    canonical: `https://web.didiglobal.com/au/help-center/rider/`,
  },
};

const CentroDeAyuda = async () => {
  const components = await fetchPageComponents("/au/help-center/rider/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default CentroDeAyuda;
