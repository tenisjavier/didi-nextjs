import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";
import { hreflangs } from "@/config/seo/hreflang";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Regístrate como Socio Conductor",
  description: "Elmejor",
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
