import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Restaurantes - Preguntas Frecuentes | DiDi Food México",
  description:
    "Restaurantes - Preguntas Frecuentes. Lee y conoce lugares ricos para ir a comer. Consejos de cocina y más con DiDi Food Blog.",
  alternates: {
    canonical: `https://web.didiglobal.com/mx/food/restaurantes/preguntas-frecuentes/`,
  },
};

const page = async () => {
  const components = await fetchPageComponents(
    "/mx/food/restaurantes/preguntas-frecuentes/"
  );

  return <BuilderComponent components={components}></BuilderComponent>;
};

export default page;
