import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title:
    "Artículos de interés sobre lugares que puedes ir a visitar con DiDi. | DiDi Chile",
  description:
    "Artículos sobre parques, restaurantes, lugares turísticos, etc. Lee sobre distintos destinos.",
};

const Articulos = async () => {
  const components = await fetchPageComponents("/cl/articulos/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Articulos;
