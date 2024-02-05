import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Regístrate como Socio Conductor",
  description: "Elmejor",
  alternates: {
    canonical: `https://web.didiglobal.com/mx/food/ciudad/`,
  },
};

const page = async () => {
  const components = await fetchPageComponents("/mx/food/ciudad/");
  console.log("components", components);
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default page;
