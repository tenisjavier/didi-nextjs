import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Driver Help & FAQs | DiDi New Zealand",
  description: "Need help? Have questions? We're here to assist you!",
  alternates: {
    canonical: `https://web.didiglobal.com/nz/help-center/driver/`,
  },
};

const CentroDeAyuda = async () => {
  const components = await fetchPageComponents("/nz/help-center/driver/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default CentroDeAyuda;
