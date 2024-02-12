import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "DiDiMás+ Beneficios para conductores | DiDi México",
  description:
    "Beneficios para Conductores DiDiMás+. DiDi en México, regístrate como socio conductor en las categorías express, taxi y fleet ganando más y manejando menos. ",
  alternates: {
    canonical: `https://web.didiglobal.com/mx/didimas/`,
  },
};

const DiDiMas = async () => {
  const components = await fetchPageComponents("/mx/didimas/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default DiDiMas;
