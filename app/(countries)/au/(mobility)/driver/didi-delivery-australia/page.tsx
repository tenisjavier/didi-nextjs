import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "DiDi Delivery for Drivers - Next Steps | DiDi Australia",
  description:
    "Earn money delivering goods for stores and people around your city.",
};

const Conductor = async () => {
  const components = await fetchPageComponents(
    "/au/driver/didi-delivery-australia/"
  );
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Conductor;
