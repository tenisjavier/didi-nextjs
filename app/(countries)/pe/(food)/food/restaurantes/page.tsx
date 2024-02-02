import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Inscribe tu Restaurante en DiDi Food | DiDi Food Perú",
  description:
    "Inscribe tu Restaurante en DiDi Food y empieza a generar ventas fuera de tu local físico. Expande tu negocio. Es rápido, cómodo y barato. Descarga gratis la app de DiDi Food ¡Recibe tu pedido en minutos!",
  alternates: {
    canonical: `https://web.didiglobal.com/pe/food/restaurantes/`,
  },
};

const page = async () => {
  const components = await fetchPageComponents("/pe/food/restaurantes/");
  console.log("components", components);
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default page;
