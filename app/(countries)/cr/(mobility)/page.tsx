import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Registrate como Socio Conductor DiDi | DiDi Costa Rica",
  description:
    "DiDi en Costa Rica, registrate como socio conductor en las categorías express y fleet ganando más y conduciendo menos.",
};

const page = async () => {
  const components = await fetchPageComponents("/cr/");
  console.log("components", components);
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default page;
