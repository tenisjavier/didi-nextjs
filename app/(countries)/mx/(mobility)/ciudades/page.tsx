import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Ciudades Disponibles en DiDi Conductor",
  description: "Elmejor",
};

const ciudades = async () => {
  const components = await fetchPageComponents("/mx/ciudades/");
  console.log("components", components);
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default ciudades;
