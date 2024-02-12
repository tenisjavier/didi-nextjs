import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title:
    "¿Tienes Preguntas sobre DiDi? Revisa las Respuestas | DiDi Republica Dominicana",
  description:
    "Tanto si eres conductor o usuario de DiDi revisa las principales dudas que el resto de las personas tienen. Así tendrás una mejor experiencia.",
  alternates: {
    canonical: `https://web.didiglobal.com/do/sobre-didi/`,
  },
};

const SobreDiDi = async () => {
  try {
    const components = await fetchPageComponents("/do/sobre-didi/");
    return <BuilderComponent components={components}></BuilderComponent>;
  } catch (error) {
    console.log("Page Error: ", error);
    return <></>;
  }
};

export default SobreDiDi;
