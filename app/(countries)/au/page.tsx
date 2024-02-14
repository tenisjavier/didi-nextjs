import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";
import { hreflangs } from "@/config/seo/hreflang";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "DiDi Australia - Ride Hailing & Delivery | DiDi Australia",
  description:
    "DiDi Australia offers a full range of app-based transportation services to users across Australia and New Zealand.",
  alternates: {
    canonical: `https://web.didiglobal.com/au/`,
    languages: hreflangs.home,
  },
};

const page = async () => {
  const components = await fetchPageComponents("/au/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default page;
