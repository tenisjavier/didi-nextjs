import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "DiDi Moto - Genera Ganancias Extras | DiDi México",
  description:
    "Genera inresos extra conectándote con DiDi Moto disponible ahora en México.",
  alternates: {
    canonical: `https://web.didiglobal.com/mx/conductor/moto/`,
  },
};

const Moto = async () => {
  const components = await fetchPageComponents("/mx/conductor/moto/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Moto;
