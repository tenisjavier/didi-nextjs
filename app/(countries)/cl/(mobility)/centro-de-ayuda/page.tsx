import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";
import { hreflangs } from "@/config/seo/hreflang";
import { ABinit } from "@/config/testing/ab";
//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Centro de Ayuda DiDi - App nº1 en movilidad del mundo | DiDi Chile",
  description:
    "Conoce aquí las funcionalidades y medidas de seguridad que hemos tomado para que en tu próximo viajes lo disfrutes al máximo.",
  alternates: {
    canonical: `https://web.didiglobal.com/cl/centro-de-ayuda/`,
    languages: hreflangs.helpCenter,
  },
};

const CentroDeAyuda = async () => {
  let pathname = "/cl/centro-de-ayuda/";
  pathname = (await ABinit(pathname)) || pathname;
  const components = await fetchPageComponents(pathname);
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default CentroDeAyuda;
