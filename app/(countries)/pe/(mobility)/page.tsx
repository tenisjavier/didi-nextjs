import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";
import { hreflangs } from "@/config/seo/hreflang";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Regístrate como Socio Conductor DiDi | DiDi Perú",
  description:
    "DiDi en Perú, regístrate como socio conductor en las categorías express, taxi y fleet ganando más y manejando menos. Si eres Socio Conductor 2 3304 0932 Si eres Pasajero 2 3304 0931",
  alternates: {
    canonical: `https://web.didiglobal.com/pe/`,
    languages: hreflangs.home,
  },
};

const page = async () => {
  const components = await fetchPageComponents("/pe/");
  console.log("components", components);
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default page;
