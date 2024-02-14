import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "DiDi Aeropuerto | DiDi México",
  description:
    "Conoce nuestros términos y condiciones para el uso del sitio web además de nuestras políticas de privacidad.",
  alternates: {
    canonical: `https://web.didiglobal.com/mx/aeropuerto/`,
  },
};

const Page = async () => {
  const components = await fetchPageComponents("/mx/aeropuerto/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Page;
