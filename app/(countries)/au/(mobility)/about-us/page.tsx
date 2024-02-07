import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "About Us | DiDi Australia",
  description: "Learn more about DiDi, the world's leading mobility platform.",
};

const SobreDiDi = async () => {
  const components = await fetchPageComponents("/au/about-us/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default SobreDiDi;
