import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "DiDi Pasajero - Baja la App y Viaja Seguro | DiDi Chile",
  description:
    "DiDi Pasajero. Viaja seguro, barato y rápido. DiDi Express, DiDi Taxi y DiDi Delivery están activos en Chile. Elige la mejor opción.",
};

const Pasajero = async () => {
  const components = await fetchPageComponents("/cl/pasajero/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Pasajero;
