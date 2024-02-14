import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title:
    "DiDi Noticias - Aquí te contamos de novedades sobre DiDi | DiDi Ecuador",
  description:
    "DiDi Noticias en Ecuador, regístrate como socio conductor en las categorías express, taxi y fleet ganando más y manejando menos. La App nº1 en movilidad llegó.",
  alternates: {
    canonical: `https://web.didiglobal.com/`,
  },
};

const Newsroom = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const components = await fetchPageComponents("/ec/newsroom/");
  return (
    <BuilderComponent
      components={components}
      params={params.slug}
      searchParams={searchParams}
    ></BuilderComponent>
  );
};

export default Newsroom;
