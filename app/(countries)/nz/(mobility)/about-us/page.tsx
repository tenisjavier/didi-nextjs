import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "About Us | DiDi New Zealand",
  description: "Learn more about DiDi, the world's leading mobility platform.",
  alternates: {
    canonical: `https://web.didiglobal.com/nz/about-us/`,
  },
};

const SobreDiDi = async () => {
  try {
    const components = await fetchPageComponents("/nz/about-us/");
    return <BuilderComponent components={components}></BuilderComponent>;
  } catch (error) {
    console.log("Page Error: ", error);
    return <></>;
  }
};

export default SobreDiDi;
