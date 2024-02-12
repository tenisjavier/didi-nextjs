import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";
import { hreflangs } from "@/config/seo/hreflang";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Help Center | DiDi Australia",
  description: "FAQs for DiDi riders and drivers.",
  alternates: {
    canonical: `https://web.didiglobal.com/au/help-center/`,
    languages: hreflangs.helpCenter,
  },
};

const CentroDeAyuda = async () => {
  const components = await fetchPageComponents("/au/help-center/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default CentroDeAyuda;
