import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Términos y Condiciones y Políticas de Privacidad. | DiDi Costa Rica",
  description:
    "Conocé nuestros términos y condiciones para el uso del sitio web además de nuestras políticas de privacidad.",
};

const page = async () => {
  const components = await fetchPageComponents(
    "/cr/food/restaurantes/preguntas-frecuentes/"
  );
  console.log("components", components);
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default page;
