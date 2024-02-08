import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Seguridad para Conductores en DiDi | DiDi México",
  description:
    "Conoce aquí las funcionalidades y medidas de seguridad que hemos tomado para que puedas manejar con DiDi de manera segura y confiable.",
};

const Seguridad = async () => {
  const components = await fetchPageComponents("/mx/seguridad/conductores/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Seguridad;
