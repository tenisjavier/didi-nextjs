import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "DiDi Entrega: Envía cosas grandes o chicas | DiDi Colombia",
  description:
    "DiDi Entrega en Colombia. Realiza envíos en los carros registrados en la app. Si cabe en la cajuela del carro, te lo enviamos.",
  alternates: {
    canonical: `https://web.didiglobal.com/co/entrega/`,
  },
};

const Entrega = async () => {
  const components = await fetchPageComponents("/co/entrega/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Entrega;
