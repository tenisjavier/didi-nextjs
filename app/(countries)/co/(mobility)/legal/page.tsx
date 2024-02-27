import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Términos y Condiciones y Políticas de Privacidad. | DiDi Colombia",
  description:
    "Conoce nuestros términos y condiciones para el uso del sitio web además de nuestras políticas de privacidad.",
  alternates: {
    canonical: `https://web.didiglobal.com/co/legal/`,
  },
};

const Legal = async () => {
  const components = await fetchPageComponents("/co/legal/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Legal;
