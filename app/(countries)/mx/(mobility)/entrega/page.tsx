import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "DiDi Entrega: Envía cosas grandes o chicas. | DiDi México",
  description: "DiDi Entrega.",
  alternates: {
    canonical: `https://web.didiglobal.com/mx/entrega/`,
  },
};

const Entrega = async () => {
  const components = await fetchPageComponents("/mx/entrega/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Entrega;
