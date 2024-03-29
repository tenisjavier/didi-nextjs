import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";
import { hreflangs } from "@/config/seo/hreflang";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "دي دي إيجيبت | DiDi Egypt",
  description:
    "تربط منصة دي دي بين ملايين من الركاب وعشرات الألوف من السائقين على مستوى العالم كل يوم.",
  alternates: {
    canonical: `https://web.didiglobal.com/eg/`,
    languages: hreflangs.home,
  },
};

const page = async () => {
  const components = await fetchPageComponents("/eg/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default page;
