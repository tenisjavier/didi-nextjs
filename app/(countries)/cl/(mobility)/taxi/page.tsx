import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "DiDi Taxi en Chile - Genera Ingresos Extra | DiDi Chile",
  description:
    "DiDi Taxi en Chile, regístrate como socio conductor en las categorías express, taxi y fleet ganando más y manejando menos. La App nº1 en movilidad llegó.",
};

const Taxi = async () => {
  const components = await fetchPageComponents("/cl/taxi/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Taxi;
