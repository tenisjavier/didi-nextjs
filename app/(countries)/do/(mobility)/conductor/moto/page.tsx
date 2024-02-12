import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "DiDi Moto - Conduce y Genera Dinero | DiDi Republica Dominicana",
  description:
    "DiDi en República Dominicana, regístrate como socio conductor en las categorías express, taxi y fleet ganando más y manejando menos. La App nº1 en movilidad llegó.",
  alternates: {
    canonical: `https://web.didiglobal.com/do/conductor/moto/`,
  },
};

const Conductor = async () => {
  const components = await fetchPageComponents("/do/conductor/moto/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Conductor;
