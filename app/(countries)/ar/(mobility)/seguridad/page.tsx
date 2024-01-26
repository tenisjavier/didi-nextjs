import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title:
    "En DiDi tu Seguridad es nuestra prioridad conocé más acá | DiDi Argentina",
  description:
    "Conocé aquí las funcionalidades y medidas de seguridad que hemos tomado para que en tu próximo viajes lo disfrutés al máximo.",
};

const Seguridad = async () => {
  const components = await fetchPageComponents("/ar/seguridad/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Seguridad;
