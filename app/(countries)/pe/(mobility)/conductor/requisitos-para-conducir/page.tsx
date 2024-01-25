import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Requisitos para Conducir y empezar a Ganar Dinero | DiDi Perú",
  description:
    "Requisitos para Conducir en DiDi. Regístrate como socio conductor, ganando más y manejando menos",
};

const Conductor = async () => {
  const components = await fetchPageComponents(
    "/pe/conductor/requisitos-para-conducir/"
  );
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Conductor;
