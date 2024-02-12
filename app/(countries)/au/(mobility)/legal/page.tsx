import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Regístrate como Socio Conductor",
  description: "Elmejor",
  alternates: {
    canonical: `https://web.didiglobal.com/au/legal/`,
  },
};

const Legal = async () => {
  const components = await fetchPageComponents("/au/legal/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Legal;
