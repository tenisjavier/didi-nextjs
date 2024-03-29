import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";
import { hreflangs } from "@/config/seo/hreflang";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "DiDi Pasajero - Descargá la App y Viajá | DiDi Costa Rica",
  description:
    "DiDi Pasajero. Viajá seguro, barato y rápido. DiDi Express está disponible en Costa Rica. Elegí la mejor opción.",
  alternates: {
    canonical: `https://web.didiglobal.com/cr/pasajero/`,
    languages: hreflangs.pax,
  },
};

const Pasajero = async () => {
  const components = await fetchPageComponents("/cr/pasajero/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Pasajero;
