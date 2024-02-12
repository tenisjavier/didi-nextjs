import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "DiDi Delivery - Personal | DiDi Australia",
  description:
    "DiDi Delivery is an on-demand delivery service allowing Australians to send and receive parcels – all delivered by DiDi drivers.",
  alternates: {
    canonical: `https://web.didiglobal.com/au/delivery/personal/`,
  },
};

const Contact = async () => {
  const components = await fetchPageComponents("/au/delivery/personal/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Contact;
