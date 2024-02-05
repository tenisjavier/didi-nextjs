import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";
import { hreflangs } from "@/config/seo/hreflang";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Pedí un DiDi y Viajá Seguro | DiDi Argentina",
  description:
    "DiDi Pasajero. DiDi en Argentina, viajá seguro, barato y rápido. DiDi Express y DiDi Taxi están activos en Argentina. Elegí la mejor opción.",
  alternates: {
    canonical: `https://web.didiglobal.com/ar/pasajero/`,
    languages: hreflangs.pax,
  },
};

const Pasajero = async () => {
  const components = await fetchPageComponents("/ar/pasajero/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Pasajero;
