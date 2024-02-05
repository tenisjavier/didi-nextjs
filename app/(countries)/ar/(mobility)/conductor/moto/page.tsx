import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "DiDi Moto - Generá Ingresos Extra con DiDi | DiDi Argentina",
  description:
    "DiDi Moto en Argentina. Registrate en DiDi Moto en nuestra web y comenzá ya a generar ganancias cuando más te convenga.",
  alternates: {
    canonical: `https://web.didiglobal.com/ar/conductor/moto/`,
  },
};

const Conductor = async () => {
  const components = await fetchPageComponents("/ar/conductor/moto/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Conductor;
