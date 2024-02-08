import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "DiDi Flex: Negocia tu precio sin afectar tu seguridad | DiDi México",
  description:
    "Descubre cómo se calculan las tarifas y cuánto puedes ganar como conductor registrado en DiDi Flex México. Considerando retenciones de impuestos como ISR e IVA.",
};

const Flex = async () => {
  const components = await fetchPageComponents("/mx/conductor/didi-flex/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Flex;
