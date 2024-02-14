import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";
import { hreflangs } from "@/config/seo/hreflang";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "DiDi New Zealand - Ride Hailing & Delivery | DiDi New Zealand",
  description:
    "DiDi New Zealand offers a full range of app-based transportation services for riders and drivers.",
  alternates: {
    canonical: `https://web.didiglobal.com/nz/`,
    languages: hreflangs.home,
  },
};

const page = async () => {
  const components = await fetchPageComponents("/nz/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default page;
