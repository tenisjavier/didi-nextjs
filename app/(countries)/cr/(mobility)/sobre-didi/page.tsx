import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "¿Tenés Preguntas sobre DiDi? Revisá las Respuestas | DiDi Costa Rica",
  description:
    "Tanto si sos conductor o usuario de DiDi revisá las principales dudas que el resto de las personas tienen. Así tendrás una mejor experiencia.",
};

const SobreDiDi = async () => {
  const components = await fetchPageComponents("/cr/sobre-didi/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default SobreDiDi;
