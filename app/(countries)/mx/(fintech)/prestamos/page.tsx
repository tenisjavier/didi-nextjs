import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "DiDi Préstamos - Rápido, Fácil y Seguro. | DiDi México",
  description:
    "DiDi Préstamos. Con DiDi Préstamos obtén hasta $30,000 m.n rápido, fácil y seguro.Tasas de interés competitiva desde un 5% al 12%. En solo 5 minutos.",
  alternates: {
    canonical: `https://web.didiglobal.com/mx/prestamos/`,
  },
};

const Page = async () => {
  const components = await fetchPageComponents("/mx/prestamos/");
  return <BuilderComponent components={components}></BuilderComponent>
};

export default Page;
