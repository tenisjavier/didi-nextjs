import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title:
    "Centro de Ayuda DiDi Conductor - App nº1 en movilidad del mundo | DiDi Argentina",
  description:
    "Conoce aquí las funcionalidades y medidas de seguridad que hemos tomado para que en tu próximo viajes lo disfrutes al máximo.",
  alternates: {
    canonical: `https://web.didiglobal.com/ar/centro-de-ayuda/conductor/`,
  },
};

const CentroDeAyuda = async () => {
  const components = await fetchPageComponents(
    "/ar/centro-de-ayuda/conductor/"
  );
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default CentroDeAyuda;