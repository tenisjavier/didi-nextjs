import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Requisitos Fiscales para Conductores de DiDi en México | DiDi México",
  description:
    "Requisitos Fiscales para Conductores de DiDi México. Regístrate como socio conductor en las categorías express, taxi y delivery, ganando más y manejando menos.",
  alternates: {
    canonical: `https://web.didiglobal.com/mx/conductor/requisitos-fiscales/`,
  },
};

const Moto = async () => {
  const components = await fetchPageComponents(
    "/mx/conductor/requisitos-fiscales/"
  );
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Moto;
