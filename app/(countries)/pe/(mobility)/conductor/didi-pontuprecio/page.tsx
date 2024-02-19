import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "DiDi Pon tu Precio: Elige el precio sin afectar tu seguridad | DiDi Peru",
  description:
    "Descubre cómo se calculan las tarifas y cuánto puedes ganar como conductor registrado en DiDi Pon tu Precio Peru. Considerando retenciones de impuestos como ISR e IVA.",
  alternates: {
    canonical: `https://web.didiglobal.com/pe/conductor/didi-pontuprecio/`,
  },
};

const Conductor = async () => {
  const components = await fetchPageComponents("/pe/conductor/didi-pontuprecio/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Conductor;
