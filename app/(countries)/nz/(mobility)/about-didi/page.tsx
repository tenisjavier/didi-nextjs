import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Regístrate como Socio Conductor",
  description: "Elmejor",
  alternates: {
    canonical: `https://web.didiglobal.com/nz/about-didi/`,
  },
};

const SobreDiDi = async () => {
  try {
    const components = await fetchPageComponents("/nz/about-us/");
    return <BuilderComponent components={components}></BuilderComponent>;
  } catch (error) {
    console.log('Page Error: ', error);
    return <></>
  }
};

export default SobreDiDi;
