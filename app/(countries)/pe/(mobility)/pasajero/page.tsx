import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";
import { hreflangs } from "@/config/seo/hreflang";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "DiDi Pasajero - Bája la App y Viaja Seguro | DiDi Perú",
  description:
    "DiDi Pasajero. DiDi en Perú, regístrate como socio conductor en la categoría express. Gana Dinero extra manejando con DiDi.",
  alternates: {
    canonical: `https://web.didiglobal.com/pe/pasajero/`,
    languages: hreflangs.pax,
  },
};

const Pasajero = async () => {
  const components = await fetchPageComponents("/pe/pasajero/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Pasajero;
