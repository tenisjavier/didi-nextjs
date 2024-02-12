import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Regístrate como Socio Conductor",
  description: "Elmejor",
  alternates: {
    canonical: `https://web.didiglobal.com/do/seguridad/`,
  },
};

const Seguridad = async () => {
  const components = await fetchPageComponents("/do/seguridad/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Seguridad;
