import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Cities | DiDi New Zealand",
  description:
    "Learn about which cities DiDi New Zealand services are available in.",
};

const Ciudades = async () => {
  const components = await fetchPageComponents("/nz/cities/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Ciudades;
