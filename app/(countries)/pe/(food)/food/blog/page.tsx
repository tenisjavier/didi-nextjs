import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title:
    "Blog DiDi Food: Temas de Comida, Restaurantes y Gastronomía Peruana | DiDi Food Perú",
  description:
    "En el blog de DiDi Food encontrarás recomendaciones sobre restaurantes de moda, platillos, rutas gastronómicas y tendencias del sector. Descubrenos",
  alternates: {
    canonical: `https://web.didiglobal.com/pe/food/blog/`,
  },
};

const page = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const components = await fetchPageComponents("/pe/food/blog/");
  return (
    <BuilderComponent
      components={components}
      params={params.slug}
      searchParams={searchParams}
    ></BuilderComponent>
  );
};

export default page;
