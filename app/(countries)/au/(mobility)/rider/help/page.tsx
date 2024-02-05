import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Ride Help & DiDi FAQs | DiDi Australia",
  description: "Need help? Have questions? We're here to assist you!",
};

const Pasajero = async () => {
  const components = await fetchPageComponents("/au/rider/help/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Pasajero;
