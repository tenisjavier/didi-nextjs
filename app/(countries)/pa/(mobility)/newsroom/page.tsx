import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Noticias sobre DiDi en Panamá | DiDi Panamá",
  description:
    "Noticias de DiDi en Panamá. En esta sección se publicarán las últimas noticias de la App Nº1 del mundo en mobilidad.",
};

const Newsroom = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const components = await fetchPageComponents("/pa/newsroom/");
  return (
    <BuilderComponent
      components={components}
      params={params.slug}
      searchParams={searchParams}
    ></BuilderComponent>
  );
};

export default Newsroom;
