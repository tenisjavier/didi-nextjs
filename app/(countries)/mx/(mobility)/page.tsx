import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";
import { hreflangs } from "@/config/seo/hreflang";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "DiDi México: Regístrate como Socio Conductor DiDi | DiDi México",
  description:
    "DiDi en México, regístrate como socio conductor en las categorías express, taxi y entrega y economy. Gana más y manejando menos.",
  alternates: {
    canonical: `https://web.didiglobal.com/mx/`,
    languages: hreflangs.home,
  },
};

const page = async () => {
  const components = await fetchPageComponents("/mx/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default page;
