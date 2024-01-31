import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "DiDi Taxi - Generá Ingresos Extra con DiDi | DiDi Argentina",
  description:
    "DiDi Taxi. Revisá los requisitos y registrate como socio taxista DiDi, ganando más y manejando menos. Si sos Socio Conductor llamános al +54 (11) 3987-6342",
  alternates: {
    canonical: `https://web.didiglobal.com/ar/taxi/`,
  },
};

const Taxi = async () => {
  const components = await fetchPageComponents("/ar/taxi/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Taxi;
