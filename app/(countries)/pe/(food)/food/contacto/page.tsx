import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "DiDi Food: Contacta nuestro Servicio al Cliente | DiDi Food Perú",
  description:
    "Si eres repartidor, restaurante o usuario puedes escribirnos por cualquier problema que tengas con DiDi Food.",
  alternates: {
    canonical: `https://web.didiglobal.com/pe/food/contacto/`,
  },
};

const page = async () => {
  const components = await fetchPageComponents("/pe/food/contacto/");
  console.log("components", components);
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default page;
