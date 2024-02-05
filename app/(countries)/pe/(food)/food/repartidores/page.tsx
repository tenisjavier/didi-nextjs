import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title:
    "Inscríbete como Repartidor y Gana Dinero en DiDi Food | DiDi Food Perú",
  description:
    "Como repartidor controlas tus tiempos. Genera ingresos de una manera confiable. Es rápido, cómodo y barato. Descarga gratis la app de DiDi Food ¡Recibe tu pedido en minutos!",
  alternates: {
    canonical: `https://web.didiglobal.com/pe/food/repartidores/`,
  },
};

const page = async () => {
  const components = await fetchPageComponents("/pe/food/repartidores/");

  return <BuilderComponent components={components}></BuilderComponent>;
};

export default page;
