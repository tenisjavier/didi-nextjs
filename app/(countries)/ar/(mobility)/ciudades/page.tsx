import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Servicios de DiDi por Ciudad. | DiDi Argentina",
  description:
    "Conocé que servicios DiDi se encuentran en tu ciudad. Si querés ser socio conductor revisá los requisitos.",
};

const Cities = async () => {
  const components = await fetchPageComponents("/ar/ciudades/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Cities;
