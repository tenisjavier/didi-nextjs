import React from "react";
import { fetchPageComponents } from "@/utils/db";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regístrate como Socio Conductor",
  description: "Elmejor",
};

const page = async () => {
  const components = await fetchPageComponents("/mx/");
  return (
    <div>
      <BuilderComponent components={components}></BuilderComponent>
      <p className="font-bold text-white">page</p>
    </div>
  );
};

export default page;
