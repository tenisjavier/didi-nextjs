import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Pide Comida a Domicilio con DiDi Food Mexico | DiDi Food Peru",
  description:
    "¿Qué comida se te antoja en este momento? DiDi Food te entrega Comida a Domicilio de tus restaurantes favoritos en todas estas ciudades... y en minutos",
  alternates: {
    canonical: `https://web.didiglobal.com/pe/food/ciudad/`,
  },
};

const page = async () => {
  const components = await fetchPageComponents("/pe/food/ciudad/");

  return <BuilderComponent components={components}></BuilderComponent>;
};

export default page;
