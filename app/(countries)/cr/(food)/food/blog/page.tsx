import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Artículos de Comida y Restaurantes | DiDi Food Costa Rica",
  description:
    "Leé y conocé lugares ricos para ir a comer. Consejos de cocina y más con DiDi Food Blog.",
  alternates: {
    canonical: `https://web.didiglobal.com/cr/food/blog/`,
  },
};

const page = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const components = await fetchPageComponents("/cr/food/blog/");
  return (
    <BuilderComponent
      components={components}
      params={params.slug}
      searchParams={searchParams}
    ></BuilderComponent>
  );
};

export default page;
