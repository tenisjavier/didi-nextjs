import React from "react";
import { Metadata } from "next";
import QrCode from "@/components/Qr";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "DiDi Global: More than a Journey | DiDi Perú",
  description:
    "Didi Chuxing is the world’s leading mobile transportation platform. The company offers a full range of mobile tech-based mobility options for over 450 million users, including Taxi, Premier, Express, Hitch, Luxe, Bus, Designated Driving, Car Rental, Enterprise Solutions and Bike-Sharing",
};

const Store = () => {
  return (
    <>
      <QrCode></QrCode>
    </>
  );
};

export default Store;
