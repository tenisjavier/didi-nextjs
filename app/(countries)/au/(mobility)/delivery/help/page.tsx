import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "DiDi Delivery Help & FAQs | DiDi Australia",
  description:
    "DiDi Delivery Help. Need help? Have questions? We're here to assist you!",
};

const Contact = async () => {
  const components = await fetchPageComponents("/au/delivery/help/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Contact;
