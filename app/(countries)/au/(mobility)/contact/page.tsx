import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Contact Our Costumer Support Center | DiDi Australia",
  description:
    "DiDi Customer Support can assist you with any enquiries, issues, or questions you have with DiDi.",
};

const Contact = async () => {
  const components = await fetchPageComponents("/au/contact/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Contact;
