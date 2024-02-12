import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Didi Confort | DiDi Colombia",
  description: "Didi Confort",
  alternates: {
    canonical: `https://web.didiglobal.com/co/conductor/didi-confort/`,
  },
};

const Conductor = async () => {
  const components = await fetchPageComponents("/co/conductor/didi-confort/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Conductor;
