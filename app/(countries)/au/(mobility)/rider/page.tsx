import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";
import { hreflangs } from "@/config/seo/hreflang";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Ride with DiDi | DiDi Australia",
  description: "Get safe, fast and affordable rides with DiDi.",
  alternates: {
    canonical: `https://web.didiglobal.com/au/rider/`,
    languages: hreflangs.pax,
  },
};

const Pasajero = async () => {
  const components = await fetchPageComponents("/au/rider/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Pasajero;
