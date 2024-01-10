import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Contact Us | DiDi Global",
  description:
    "Contact Us. DiDi Global is the world's leading mobile transportation platform offering a full range of app-based services to users around the world.",
  alternates: {
    canonical: `https://web.didiglobal.com/contact/`,
  },
};

const Contact = async () => {
  const components = await fetchPageComponents("/contact/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Contact;
