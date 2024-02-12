import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title:
    "DiDi Food: Contactá nuestro Servicio al Cliente | DiDi Food Costa Rica",
  description:
    "Si sos repartidor, restaurante o usuario podés escribirnos por cualquier problema que tengas con DiDi Food.",
};

const page = async () => {
  const components = await fetchPageComponents("/cr/food/contacto/");

  return <BuilderComponent components={components}></BuilderComponent>;
};

export default page;
