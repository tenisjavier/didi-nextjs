import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "DiDi Entrega: Envía cosas grandes o chicas | DiDi Chile",
  description:
    "DiDi Entrega en Chile. Realiza envíos en los autos registrados en la app. Si cabe en la maleta del auto, te lo enviamos.",
};

const Entrega = async () => {
  const components = await fetchPageComponents("/cl/entrega/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Entrega;
