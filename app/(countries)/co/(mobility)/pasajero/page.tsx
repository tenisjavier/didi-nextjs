import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";
import { hreflangs } from "@/config/seo/hreflang";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "DiDi Pasajero - Muévete por tu Ciudad | DiDi Colombia",
  description:
    "DiDi Pasajero. DiDi en Colombia, regístrate como socio conductor en la categoría express. Gana Dinero extra manejando con DiDi.",
  alternates: {
    canonical: `https://web.didiglobal.com/co/pasajero/`,
    languages: hreflangs.pax,
  },
};

const Pasajero = async () => {
  const components = await fetchPageComponents("/co/pasajero/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Pasajero;
