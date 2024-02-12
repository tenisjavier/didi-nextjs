import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Regístrate como Socio Conductor",
  description: "Elmejor",
  alternates: {
    canonical: `https://web.didiglobal.com/do/conductor/moto/`,
  },
};

const Conductor = async () => {
  const components = await fetchPageComponents("/do/conductor/moto/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Conductor;
