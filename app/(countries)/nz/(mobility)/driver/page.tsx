import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";
import { hreflangs } from "@/config/seo/hreflang";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "DiDi Driver - Drive and earn with DiDi | DiDi New Zealand",
  description:
    "Start earning today as a driver-partner with industry-leading safety features and low service fees.",
  alternates: {
    canonical: `https://web.didiglobal.com/nz/driver/`,
    languages: hreflangs.drv,
  },
};

const Conductor = async () => {
  const components = await fetchPageComponents("/nz/driver/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Conductor;
