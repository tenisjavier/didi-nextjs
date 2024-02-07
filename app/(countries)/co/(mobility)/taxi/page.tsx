import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "DiDi Taxi - Genera Ingresos Extra con DiDi | DiDi Colombia",
  description:
    "DiDi Taxi en Colombia, regístrate como socio conductor en las categorías express, taxi y fleet ganando más y manejando menos. La App nº1 en movilidad llegó.",
  alternates: {
    canonical: `https://web.didiglobal.com/co/taxi/`,
  },
};

const Pasajero = async () => {
  const components = await fetchPageComponents("/co/taxi/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Pasajero;
