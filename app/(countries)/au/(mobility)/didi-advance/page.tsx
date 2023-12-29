import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "DiDi Conductor - Maneja y Genera Dinero | DiDi Panamá",
  description:
    "DiDi Conductor. Revisa los requisitos. Regístrate como socio conductor en las categorías express y moto, ganando más y manejando menos.",
};

const Conductor = async () => {
  const components = await fetchPageComponents("/au/didi-advance/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Conductor;
