import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "La App de Comida Más Confiable | DiDi Food Colombia",
  description:
    "Pide comida a domicilio de tus restaurantes favoritos. Es rápido, cómodo y barato. Descarga gratis la app de DiDi Food ¡Recibe tu pedido en minutos!",
  alternates: {
    canonical: `https://web.didiglobal.com/co/food/acerca-didi-food/`,
  },
};

const page = async () => {
  const components = await fetchPageComponents("/co/food/acerca-didi-food/");

  return <BuilderComponent components={components}></BuilderComponent>;
};

export default page;
