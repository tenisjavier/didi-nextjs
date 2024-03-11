import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title:
    "Preguntas Frecuentes de Repartidores y Restaurantes | DiDi Food México",
  description:
    "¿Tienes dudas sobre DiDi Food? Consulta nuestra sección de preguntas frecuentes a continuación:",
  alternates: {
    canonical: `https://web.didiglobal.com/mx/food/preguntas-frecuentes/`,
  },
};

const page = async () => {
  const components = await fetchPageComponents(
    "/mx/food/preguntas-frecuentes/"
  );
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default page;
