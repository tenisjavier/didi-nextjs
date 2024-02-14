import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";
import { hreflangs } from "@/config/seo/hreflang";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "DiDi Pasajero - Baja la App y Viaja Seguro | DiDi México",
  description:
    "DiDi Pasajero. Viaja seguro, barato y rápido. DiDi Express, DiDi Taxi, DiDi Delivery y DiDi Economy están activos en México. Elige la mejor opción.",
  alternates: {
    canonical: `https://web.didiglobal.com/mx/pasajero/`,
    languages: hreflangs.pax,
  },
};

const Pasajero = async () => {
  const components = await fetchPageComponents("/mx/pasajero/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Pasajero;
