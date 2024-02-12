import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Regístrate como Socio Conductor",
  description: "Elmejor",
  alternates: {
    canonical: `https://web.didiglobal.com/co/food/preguntas-frecuentes/`,
  },
};

const page = async () => {
  const components = await fetchPageComponents(
    "/co/food/preguntas-frecuentes/"
  );

  return <BuilderComponent components={components}></BuilderComponent>;
};

export default page;
