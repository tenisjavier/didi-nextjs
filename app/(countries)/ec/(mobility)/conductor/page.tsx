import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "DiDi Conductor - Conduce y Genera Dinero | DiDi Ecuador",
  description:
    "DiDi Conductor. Revisa los requisitos. Regístrate como socio conductor en la categoría express y empieza a ganar más y manejando menos.",
};

const Conductor = async () => {
  const components = await fetchPageComponents("/ec/conductor/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Conductor;
