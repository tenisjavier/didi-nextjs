import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Seguridad para Pasajeros en DiDi | DiDi México",
  description:
    "Conoce aquí las funcionalidades y medidas de seguridad que hemos tomado para que puedas vivir la experiencia de viajar en DiDi de manera segura y confiable.",
  alternates: {
    canonical: `https://web.didiglobal.com/mx/seguridad/pasajeros/`,
  },
};

const Seguridad = async () => {
  const components = await fetchPageComponents("/mx/seguridad/pasajeros/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Seguridad;
