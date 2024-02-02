import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Regístrate como Socio Conductor",
  description: "Elmejor",
  alternates: {
    canonical: `https://web.didiglobal.com/pe/conductor/ciudades/`,
  },
};

const Ciudades = async () => {
  const components = await fetchPageComponents("/pe/ciudades/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Ciudades;
