import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "DiDi Servicios Financieros | DiDi México",
  description:
    "DiDi Servicios Financieros. DiDi Pay te permite hacer recargas telefónicas, comprar tarjetas de regalo y pagar diversos servicios, como el agua, la luz, planes de telefonía y muchos más, todo desde la comodidad de tu app DiDi.",
  alternates: {
    canonical: `https://web.didiglobal.com/mx/servicios-financieros/`,
  },
};

const page = async () => {
  const components = await fetchPageComponents("/mx/servicios-financieros/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default page;
