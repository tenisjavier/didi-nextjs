import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "La App de Comida Más Confiable | DiDi Food Perú",
  description:
    "Pide comida a domicilio de tus restaurantes favoritos. Es rápido, cómodo y barato. Descarga gratis la app de DiDi Food ¡Recibe tu pedido en minutos!",
};

const page = async () => {
  const components = await fetchPageComponents("/pe/food/acerca-didi-food/");
  console.log("components", components);
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default page;
