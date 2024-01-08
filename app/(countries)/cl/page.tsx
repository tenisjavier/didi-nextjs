import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";
import { hreflangs } from "@/config/seo/hreflang";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Regístrate como Socio Conductor DiDi | DiDi Chile",
  description:
    "DiDi en Chile, regístrate como socio conductor en las categorías express, taxi y fleet ganando más y manejando menos.",
  alternates: {
    canonical: `https://web.didiglobal.com/cl/`,
    languages: hreflangs.home,
  },
};

const page = async () => {
  const components = await fetchPageComponents("/cl/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default page;
