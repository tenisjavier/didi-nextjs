import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "DiDi Pasajero - Baja la App y Viaja Seguro | DiDi Ecuador",
  description:
    "DiDi Pasajero. Viaja seguro, barato y rápido. Somos la App nº1 en movilidad del mundo. Ya nos encontramos en Ecuador.",
};

const Pasajero = async () => {
  const components = await fetchPageComponents("/ec/pasajero/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Pasajero;
