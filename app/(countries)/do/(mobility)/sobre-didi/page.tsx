import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Regístrate como Socio Conductor",
  description: "Elmejor",
};


const SobreDiDi = async () => {
  try {
    const components = await fetchPageComponents("/do/sobre-didi/");
    return <BuilderComponent components={components}></BuilderComponent>;
  } catch (error) {
    console.log('Page Error: ', error);
    return <></>
  }
};

export default SobreDiDi;

