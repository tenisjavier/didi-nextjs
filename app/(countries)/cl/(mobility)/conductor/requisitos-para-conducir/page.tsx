import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";
import { ABinit } from "@/config/testing/ab";
//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Requisitos para Conducir y empezar a Ganar Dinero | DiDi Chile",
  description:
    "Requisitos para Conducir en DiDi. Regístrate como socio conductor en las categorías express y taxi, ganando más y manejando menos",
};

const Conductor = async () => {
  let pathname = "/cl/conductor/requisitos-para-conducir/";
  pathname = (await ABinit(pathname)) || pathname;
  const components = await fetchPageComponents(pathname);
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Conductor;
