import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title:
    "En DiDi tu Seguridad es nuestra prioridad conoce más acá | DiDi Panamá",
  description:
    "Conoce aquí las funcionalidades y medidas de seguridad que hemos tomado para que en tu próximo viajes lo disfrutes al máximo.",
  alternates: {
    canonical: `https://web.didiglobal.com/nz/safety/driver-safety/`,
  },
};

const Seguridad = async () => {
  const components = await fetchPageComponents("/nz/safety/driver-safety");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Seguridad;
