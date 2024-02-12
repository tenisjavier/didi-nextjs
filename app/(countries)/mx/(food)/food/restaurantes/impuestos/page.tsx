import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Restaurantes - Impuestos | DiDi Food México",
  description:
    "Restaurantes - Impuestos. Lee y conoce lugares ricos para ir a comer. Consejos de cocina y más con DiDi Food Blog.",
};

const page = async () => {
  const components = await fetchPageComponents(
    "/mx/food/restaurantes/impuestos/"
  );

  return <BuilderComponent components={components}></BuilderComponent>;
};

export default page;
