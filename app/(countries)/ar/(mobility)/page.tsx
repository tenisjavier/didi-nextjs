import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";
import { hreflangs } from "@/config/seo/hreflang";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Registrate como Socio Conductor DiDi | DiDi Argentina",
  description:
    "DiDi en Argentina, registrate como socio conductor en las categorías express y taxi ganando más y manejando menos. Si sos Socio Conductor llamános al +54 (11) 3987-6342",
  alternates: {
    canonical: `https://web.didiglobal.com/ar/`,
    languages: hreflangs.home,
  },
};

const page = async () => {
  const components = await fetchPageComponents("/ar/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default page;
