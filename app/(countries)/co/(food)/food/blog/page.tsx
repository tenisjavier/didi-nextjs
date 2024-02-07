import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Artículos de Comida y Restaurantes | DiDi Food Colombia",
  description:
    "Lee y conoce lugares ricos para ir a comer. Consejos de cocina y más con DiDi Food Blog.",
  alternates: {
    canonical: `https://web.didiglobal.com/co/food/blog/`,
  },
};

const page = async () => {
  const components = await fetchPageComponents("/co/food/blog/");
  console.log("components", components);
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default page;
