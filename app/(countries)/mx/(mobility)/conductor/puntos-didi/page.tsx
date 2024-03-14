import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Puntos DiDi | DiDi México",
  description: "Conoce Puntos DiDi",
  alternates: {
    canonical: `https://web.didiglobal.com/mx/conductor/puntos-didi/`,
  },
};

const Moto = async () => {
  const components = await fetchPageComponents("/mx/conductor/puntos-didi/");

  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Moto;
