import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "DiDi Conductor - Maneja y Genera Dinero | DiDi Perú",
  description:
    "DiDi Conductor en Perú. Revisa los requisitos para convertirte en socio conductor. Regístrate como socio conductor en la categoría express, ganando más y manejando menos.",
};

const Conductor = async () => {
  const components = await fetchPageComponents("/pe/conductor/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Conductor;
