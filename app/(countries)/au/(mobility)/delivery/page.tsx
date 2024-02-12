import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "DiDi Delivery | DiDi Australia",
  description:
    "Power your business with instant and affordable delivery services.",
  alternates: {
    canonical: `https://web.didiglobal.com/au/delivery/`,
  },
};

const Contact = async () => {
  const components = await fetchPageComponents("/au/delivery/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Contact;
