import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Club de Beneficios DiDiMás+ para Conductores | DiDi Colombia",
  description:
    "Beneficios para Conductores DiDiMás+. DiDi en Colombia, regístrate como socio conductor en las categorías express, taxi y fleet ganando más y manejando menos. ",
  alternates: {
    canonical: `https://web.didiglobal.com/co/didimas/`,
  },
};

const Conductor = async () => {
  const components = await fetchPageComponents("/co/didimas/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Conductor;
