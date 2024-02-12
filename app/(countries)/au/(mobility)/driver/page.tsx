import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";
import { hreflangs } from "@/config/seo/hreflang";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "DiDi Conductor - Maneja y Genera Dinero | DiDi Panamá",
  description:
    "DiDi Conductor. Revisa los requisitos. Regístrate como socio conductor en las categorías express y moto, ganando más y manejando menos.",
  alternates: {
    canonical: `https://web.didiglobal.com/au/driver/`,
    languages: hreflangs.drv,
  },
};

const Conductor = async () => {
  const components = await fetchPageComponents("/au/driver/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Conductor;
