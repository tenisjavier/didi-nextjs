import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "DiDi Fleet - Alquilá tus autos y generá ganancias | DiDi Argentina",
  description:
    "Si tenés uno o más autos que quieras poner en alquiler, subilos a la app de DiDi Fleet y podrás asociar conductores a tus autos. Generá ganancias de manera pasiva alquilando tus autos con DiDi Fleet.",
};

const Fleet = async () => {
  const components = await fetchPageComponents("/ar/didi-fleet/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Fleet;
