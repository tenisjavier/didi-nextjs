import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Guías para Conductores DiDi. | DiDi Chile",
  description:
    "Guías educativas para conductores. Entérate de distintos asociados a conducción de un vehículo.",
  alternates: {
    canonical: `https://web.didiglobal.com/cl/guias/`,
  },
};

const Guias = async () => {
  const components = await fetchPageComponents("/cl/guias/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Guias;
