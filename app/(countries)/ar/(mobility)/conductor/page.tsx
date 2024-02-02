import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";
import { hreflangs } from "@/config/seo/hreflang";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "DiDi Conductor - Manejá y Generá Dinero | DiDi Argentina",
  description:
    "DiDi Conductor, registrate como socio conductor en la categoría de express o taxi, ganando más y manejando menos. Si sos Socio Conductor llamános al +54 (11) 3987-6342",
  alternates: {
    canonical: `https://web.didiglobal.com/ar/conductor/`,
    languages: hreflangs.drv,
  },
};

const page = async () => {
  const components = await fetchPageComponents("/ar/conductor/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default page;
