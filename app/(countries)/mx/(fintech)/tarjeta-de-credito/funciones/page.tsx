import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Funcionalidades de DiDi Card | DiDi México",
  description:
    "La nueva tarjeta con beneficios diarios y sin comisiones ocultas. Pídela en 5 minutos",
  alternates: {
    canonical: `https://web.didiglobal.com/mx/tarjeta-de-credito/funciones/`,
  },
};

const Page = async () => {
  const components = await fetchPageComponents(
    "/mx/tarjeta-de-credito/funciones/"
  );
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Page;
