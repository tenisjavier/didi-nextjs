import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Seguridad para Pasajeros | DiDi República Dominicana",
  description:
    "Conoce aquí las funcionalidades y medidas de seguridad que hemos tomado para que en tu próximo viajes lo disfrutes al máximo.",
  alternates: {
    canonical: `https://web.didiglobal.com/do/seguridad/`,
  },
};

const Seguridad = async () => {
  const components = await fetchPageComponents("/do/seguridad/pasajeros/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Seguridad;
