import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Pedí un DiDi y Viajá Seguro | DiDi Argentina",
  description:
    "DiDi Pasajero. DiDi en Argentina, viajá seguro, barato y rápido. DiDi Express y DiDi Taxi están activos en Argentina. Elegí la mejor opción.",
};

const Pasajero = async () => {
  const components = await fetchPageComponents("/ar/pasajero/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Pasajero;
