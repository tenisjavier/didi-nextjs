import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title:
    "Preguntas Frecuentes para Repartidores de DiDi Food | DiDi Food México",
  description:
    "Como repartidor controlas tus tiempos. Genera ingresos de una manera confiable. Es rápido, cómodo y barato. Descarga gratis la app de DiDi Food ¡Recibe tu pedido en minutos!",
};

const page = async () => {
  const components = await fetchPageComponents(
    "/mx/food/repartidores/preguntas-frecuentes/"
  );
  console.log("components", components);
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default page;
