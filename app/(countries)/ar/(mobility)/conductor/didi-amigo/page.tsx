import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title:
    "DiDi Amigo Argentina: Registrate, referí posibles conductores y ganá. | DiDi Argentina",
  description:
    "Con nuestro programa de referidos DiDi Amigos puedes referir personas que les gustaría conducir con DiDi y ganás dinero si lo hacen.",
};

const Conductor = async () => {
  const components = await fetchPageComponents("/ar/conductor/didi-amigo/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Conductor;
