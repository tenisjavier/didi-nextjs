import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Tienes Preguntas sobre DiDi? Revisa las Respuestas | DiDi Perú",
  description:
    "Tanto si eres conductor o usuario de DiDi revisa las principales dudas que el resto de las personas tienen. Así tendrás una mejor experiencia.",
};

const SobreDiDi = async () => {
  const components = await fetchPageComponents("/pe/sobre-didi/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default SobreDiDi;
