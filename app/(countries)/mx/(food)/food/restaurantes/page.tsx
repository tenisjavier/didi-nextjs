import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";
import { hreflangs } from "@/config/seo/hreflang";
//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title:
    "Registra tu Tienda o Restaurante y crece con DiDi Food | DiDi Food México",
  description:
    "Inscribe tu Tienda o Restaurante en DiDi Food y empieza a generar ventas fuera de tu local físico. Expande tu negocio. Es rápido, cómodo y barato. Descarga gratis la app de DiDi Food ¡Recibe tu pedido en minutos!",
  alternates: {
    canonical: `https://web.didiglobal.com/mx/food/restaurantes/`,
    languages: hreflangs.foodBusiness,
  },
};

const page = async () => {
  const components = await fetchPageComponents("/mx/food/restaurantes/");

  return <BuilderComponent components={components}></BuilderComponent>;
};

export default page;
