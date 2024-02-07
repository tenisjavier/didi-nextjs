import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title:
    "Inscribite como Repartidor y Ganá Dinero en DiDi Food | DiDi Food Costa Rica",
  description:
    "Como repartidor controlás tus tiempos. Generá ingresos de una manera confiable. Es rápido, cómodo y barato. Descargá gratis la app de DiDi Food ¡Recibí tu pedido en minutos!",
};

const page = async () => {
  const components = await fetchPageComponents("/cr/food/repartidores/");
  console.log("components", components);
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default page;
