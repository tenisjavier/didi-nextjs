import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";
import { hreflangs } from "@/config/seo/hreflang";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "DiDi Pasajero - Baja la App y Viaja Seguro | DiDi Ecuador",
  description:
    "DiDi Pasajero. Viaja seguro, barato y rápido. Somos la App nº1 en movilidad del mundo. Ya nos encontramos en Ecuador.",
  alternates: {
    canonical: `https://web.didiglobal.com/ec/pasajero/`,
    languages: hreflangs.pax,
  },
};

const Pasajero = async () => {
  const components = await fetchPageComponents("/ec/pasajero/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Pasajero;
