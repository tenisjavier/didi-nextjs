import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "DiDi Taxi en Costa Rica - Generá Ingresos Extra | DiDi Costa Rica",
  description:
    "DiDi Taxi en Costa Rica, registrate como socio conductor en las categorías express, taxi y fleet ganando más y manejando menos. La App nº1 en movilidad llegó.",
  alternates: {
    canonical: `https://web.didiglobal.com/cr/taxi/`,
  },
};

const Taxi = async () => {
  const components = await fetchPageComponents("/cr/taxi/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Taxi;
