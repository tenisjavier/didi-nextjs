import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title:
    "¿Cuánto dinero pueden ganar los conductores a través de DiDi? | DiDi México",
  description:
    "Descubre cómo se calculan las tarifas y cuánto puedes ganar como conductor registrado en DiDi México. Considerando retenciones de impuestos como ISR e IVA",
};

const Conductor = async () => {
  const components = await fetchPageComponents(
    "/mx/conductor/calcula-tus-ganancias/"
  );
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Conductor;
