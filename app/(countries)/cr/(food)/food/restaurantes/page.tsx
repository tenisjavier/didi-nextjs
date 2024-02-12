import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title:
    "Registrá tu Tienda o Restaurante y crece con DiDi Food | DiDi Food Costa Rica",
  description:
    "Registrá tu Tienda o Restaurante en DiDi Food y empezá a generar ventas fuera de tu local físico. Expandí tu negocio. Es rápido, cómodo y barato. Descargá gratis la app de DiDi Food ¡Recibí tu pedido en minutos!",
};

const page = async () => {
  const components = await fetchPageComponents("/cr/food/restaurantes/");

  return <BuilderComponent components={components}></BuilderComponent>;
};

export default page;
