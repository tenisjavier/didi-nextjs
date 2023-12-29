import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Regístrate como Socio Conductor | DiDi Colombia",
  description:
    "DiDi en Colombia, regístrate como socio conductor en las categorías express, taxi y fleet ganando más y manejando menos.",
};

const page = async () => {
  const components = await fetchPageComponents("/co/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default page;
