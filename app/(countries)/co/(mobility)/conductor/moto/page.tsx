import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "DiDi Moto - Genera ingresos extra | DiDi Colombia",
  description:
    "Genera ingresos extra conectándote con DiDi Moto disponible ahora en Colombia.",
  alternates: {
    canonical: `https://web.didiglobal.com/co/conductor/moto/`,
  },
};

const Conductor = async () => {
  const components = await fetchPageComponents("/co/conductor/moto/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Conductor;
