import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "DiDi Pay - Baja la App y asocia tu tarjeta. | DiDi México",
  description:
    "DiDi Pay México. DiDi Pay te permite hacer recargas telefónicas, comprar tarjetas de regalo y pagar diversos servicios, como el agua, la luz, planes de telefonía y muchos más, todo desde la comodidad de tu app DiDi.",
};

const Page = async () => {
  const components = await fetchPageComponents("/mx/didipay/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Page;
