import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Servicios de DiDi por Ciudad. | DiDi Panamá",
  description:
    "Conoce que servicios DiDi se encuentran en tu ciudad. Si quieres ser socio conductor revisa los requisitos.",
  alternates: {
    canonical: `https://web.didiglobal.com/eg/driver/cities/`,
  },
};

const Ciudades = async () => {
  const components = await fetchPageComponents("/eg/cities/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Ciudades;
