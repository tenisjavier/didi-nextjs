import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "DiDi Global: More than a Journey | DiDi Food Perú",
  description:
    "Didi Chuxing is the world’s leading mobile transportation platform. The company offers a full range of mobile tech-based mobility options for over 450 million users, including Taxi, Premier, Express, Hitch, Luxe, Bus, Designated Driving, Car Rental, Enterprise Solutions and Bike-Sharing",
};

const page = async () => {
  const components = await fetchPageComponents("/pe/food/blog/");
  console.log("components", components);
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default page;
