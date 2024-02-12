import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Fatigue Prevention Feature | DiDi Australia",
  description:
    "It is recommended that you have frequent breaks throughout the day. Just remember to tap “Go Offline” when you do. ",
  alternates: {
    canonical: `https://web.didiglobal.com/au/safety/fatigue-prevention-feature/`,
  },
};

const Seguridad = async () => {
  const components = await fetchPageComponents(
    "/au/safety/fatigue-prevention-feature/"
  );
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Seguridad;
