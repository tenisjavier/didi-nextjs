import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Safety | DiDi Australia",
  description:
    "Your safety comes first-- learn more about our industry-leading safety features.",
  alternates: {
    canonical: `https://web.didiglobal.com/au/safety/`,
  },
};

const Seguridad = async () => {
  const components = await fetchPageComponents("/au/safety/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Seguridad;
