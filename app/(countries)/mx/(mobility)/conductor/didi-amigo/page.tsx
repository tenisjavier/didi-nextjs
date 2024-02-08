import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title:
    "DiDi Amigo: Regístrate, refiere posibles conductores y gana. | DiDi México",
  description:
    "Con nuestro programa de referidos DiDi Amigos puedes referir personas que les gustaría conducir con DiDi y ganas dinero si lo hacen.",
};

const Page = async () => {
  const components = await fetchPageComponents("/mx/conductor/didi-amigo/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Page;
