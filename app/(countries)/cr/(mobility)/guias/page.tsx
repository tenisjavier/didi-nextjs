import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Regístrate como Socio Conductor",
  description: "Elmejor",
};


const Guias = async () => {
  const components = await fetchPageComponents("/cr/guias/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Guias;

