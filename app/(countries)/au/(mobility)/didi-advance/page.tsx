import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "DiDi Advance Driver Program | DiDi Australia",
  description:
    "Learn more about our DiDi Advance earnings program for driver-partners.",
};

const Conductor = async () => {
  const components = await fetchPageComponents("/au/didi-advance/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Conductor;
