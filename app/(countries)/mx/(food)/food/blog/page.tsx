import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title:
    "Blog DiDi Food: Temas de Comida, Restaurantes y Gastronomía Mexicana | DiDi Food México",
  description:
    "En el blog de DiDi Food encontrarás recomendaciones sobre restaurantes de moda, platillos, rutas gastronómicas y tendencias del sector. Descubrenos",
};

const page = async () => {
  const components = await fetchPageComponents("/mx/food/blog/");
  console.log("components", components);
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default page;
