import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";
import { hreflangs } from "@/config/seo/hreflang";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "DiDi Conductor - Maneja y Genera Ingresos Extra | DiDi Colombia",
  description:
    "DiDi Conductor en Colombia. Revisa los requisitos para convertirte en socio conductor. Regístrate como socio conductor en la categoría express, ganando más y manejando menos.",
  alternates: {
    canonical: `https://web.didiglobal.com/co/conductor/`,
    languages: hreflangs.drv,
  },
};

const Conductor = async () => {
  const components = await fetchPageComponents("/co/conductor/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Conductor;
