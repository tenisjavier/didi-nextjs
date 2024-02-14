import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Pide un DiDi Moto - Llega antes pagando menos | DiDi Colombia",
  description:
    "DiDi Moto, precios justos, llega antes pagando menos. Siempre utiliza un casco de correctamente ajustado.Es muy importante que mantengas la postura correcta durante todo el viaje.",
  alternates: {
    canonical: `https://web.didiglobal.com/co/pasajero/moto/`,
  },
};

const Page = async () => {
  const components = await fetchPageComponents("/co/pasajero/moto/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Page;
