import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title:
    "Artículos de interés sobre lugares que puedes ir a visitar con DiDi. | DiDi México",
  description:
    "Artículos sobre parques, restaurantes, lugares turísticos, etc. Lee sobre distintos destinos.",
  alternates: {
    canonical: `https://web.didiglobal.com/mx/articulos/`,
  },
};
const Articulos = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const components = await fetchPageComponents("/mx/articulos/");
  return (
    <BuilderComponent
      components={components}
      params={params.slug}
      searchParams={searchParams}
    ></BuilderComponent>
  );
};

export default Articulos;
