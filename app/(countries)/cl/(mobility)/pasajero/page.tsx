import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";
import { hreflangs } from "@/config/seo/hreflang";
import { ABinit } from "@/config/testing/ab";
//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "DiDi Pasajero - Baja la App y Viaja Seguro | DiDi Chile",
  description:
    "DiDi Pasajero. Viaja seguro, barato y rápido. DiDi Express, DiDi Taxi y DiDi Delivery están activos en Chile. Elige la mejor opción.",
  alternates: {
    canonical: `https://web.didiglobal.com/cl/pasajero/`,
    languages: hreflangs.pax,
  },
};

const Pasajero = async () => {
  let pathname = "/cl/pasajero/";
  pathname = (await ABinit(pathname)) || pathname;
  const components = await fetchPageComponents(pathname);
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Pasajero;
