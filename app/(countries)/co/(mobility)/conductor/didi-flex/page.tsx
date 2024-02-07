import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "DiDi Flex: Elige el precio sin afectar tu seguridad | DiDi Colombia",
  description:
    "Descubre cómo se calculan las tarifas y cuánto puedes ganar como conductor registrado en DiDi Flex Colombia. Considerando retenciones de impuestos como ISR e IVA.",
  alternates: {
    canonical: `https://web.didiglobal.com/co/conductor/didi-flex/`,
  },
};

const Conductor = async () => {
  const components = await fetchPageComponents("/co/conductor/didi-flex/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Conductor;
