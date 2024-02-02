import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "DiDi Pasajero - Baja la App y Viaja Seguro | DiDi Panamá",
  description:
    "DiDi Pasajero. Viaja seguro, barato y rápido. DiDi Express y DiDi Moto están activos en Panamá. Elige la mejor opción.",
  alternates: {
    canonical: `https://web.didiglobal.com/co/pasajero/moto/`,
  },
};

const Page = async () => {
  const components = await fetchPageComponents("/co/pasajero/moto/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Page;
