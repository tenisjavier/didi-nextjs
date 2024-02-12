import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Stay safe with DiDi Sal, your in-trip pal | DiDi Australia",
  description:
    "DiDi Sal sends helpful safety messages and alerts during your trip to check if everything’s A-OK.",
  alternates: {
    canonical: `https://web.didiglobal.com/au/features/didisal/`,
  },
};

const Contact = async () => {
  const components = await fetchPageComponents("/au/features/didisal/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Contact;
