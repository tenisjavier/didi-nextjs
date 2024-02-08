import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "DiDi Fleet - Genera Dinero Rentando tus Autos | DiDi México",
  description:
    "DiDi Fleet. Si tienes uno o más autos que quieras rentabilizar, súbelos a la app de DiDi Fleet y podrás asociar conductores a tus autos. Gana dinero de manera pasiva con DiDi Fleet.",
};

const Fleet = async () => {
  const components = await fetchPageComponents("/mx/didi-fleet/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Fleet;
