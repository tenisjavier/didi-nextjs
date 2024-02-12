import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Pedí comida a través de DiDi Food | DiDi Food Costa Rica",
  description:
    "Pedí comida a domicilio de tus restaurantes favoritos. Es rápido, cómodo y barato. Descargá gratis la app de DiDi Food ¡Recibí tu pedido en minutos!",
};

const page = async () => {
  const components = await fetchPageComponents("/cr/food/");

  return <BuilderComponent components={components}></BuilderComponent>;
};

export default page;
