import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "نبذة عنا | DiDi Egypt",
  description: "إننا شركة دي دي، منصة التنقل الرائدة عالميًا.",
};

const SobreDiDi = async () => {
  const components = await fetchPageComponents("/eg/about-us/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default SobreDiDi;
