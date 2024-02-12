import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";
import { hreflangs } from "@/config/seo/hreflang";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "احجز مشوارك مع  دي دي | DiDi Egypt",
  description: " مشاوير أكثر أمانًا ويعتمد عليها وبأجرة منخفضة.",
  alternates: {
    canonical: `https://web.didiglobal.com/eg/rider/`,
    languages: hreflangs.pax,
  },
};

const Pasajero = async () => {
  const components = await fetchPageComponents("/eg/rider/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Pasajero;
