import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";
import { hreflangs } from "@/config/seo/hreflang";
import { ABinit } from "@/config/testing/ab";
//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "DiDi Conductor - Maneja y Genera Dinero | DiDi Chile",
  description:
    "DiDi Conductor. Revisa los requisitos. Regístrate como socio conductor en las categorías express, taxi y delivery, ganando más y manejando menos.",
  alternates: {
    canonical: `https://web.didiglobal.com/cl/conductor/`,
    languages: hreflangs.drv,
  },
};

const Conductor = async () => {
  let pathname = "/cl/conductor/";
  pathname = (await ABinit(pathname)) || pathname;
  const components = await fetchPageComponents("/cl/conductor/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Conductor;
