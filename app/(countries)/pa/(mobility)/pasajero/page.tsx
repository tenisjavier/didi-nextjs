import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "DiDi Pasajero - Baja la App y Viaja Seguro | DiDi Panamá",
  description:
    "DiDi Pasajero. Viaja seguro, barato y rápido. DiDi Express y DiDi Moto están activos en Panamá. Elige la mejor opción.",
};

const Pasajero = async () => {
  const components = await fetchPageComponents("/pa/pasajero/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Pasajero;
