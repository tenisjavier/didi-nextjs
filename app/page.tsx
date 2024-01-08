import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchCountries, fetchPageComponents } from "@/utils/db";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Image from "next/image";
import { CTASectionT } from "@/typings";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Regístrate como Socio Conductor",
  description: "Elmejor",
};

const Contact = async () => {
  const components = await fetchPageComponents("/");
  const countries = await fetchCountries();
  const CTAProps = {
    hero: true,
    title: "Welcome to DiDi.",
    desc: "More than a Journey. The World‘s Leading Transportation Platform.",
    textColor: "white",
    bgColor: "bg-gray-primary",
    bgVideo: (
      <video
        autoPlay
        muted
        loop
        id="myVideo"
        className="!absolute z-0  h-140 overflow-hidden md:block"
      >
        <source src={"/images/didi-home.mp4"} type="video/mp4"></source>
      </video>
    ),
    imageRawRender: (
      <Image
        src="/images/logos/didi-logo-home.png"
        alt="DiDi"
        className="z-20 m-4 "
        width={250}
        height={110}
      ></Image>
    ),
    alignItems: "center",
  };
  const AboutDiDiProps: CTASectionT = {
    hero: false,
    title: "DiDi Around the World",
    desc: "We connect more than 550 million users around the world with our mobility platform, serving their needs in food delivery, mobility, financial services and more.",
    textColor: "gray-primary",
    bgColor: "bg-white",
    image: {
      url: "/images/AboutHero.png",
      description: "About Hero",
      title: "About Hero"
    },
    imageStyle: "z-10 m-4 w-100 rounded",
    list: countries.map((c) => {
      return { text: c.englishName, link: c.code };
    }),
  };
  return (
    <>
      <Header countryCode="en" businessType="mobility"></Header>
      <CTASection {...CTAProps}></CTASection>
      <CTASection {...AboutDiDiProps}></CTASection>
      <BuilderComponent components={components}></BuilderComponent>
      <Footer
        countryCode="en"
        businessType="mobility"
        languageCode="en"
      ></Footer>
    </>
  );
};

export default Contact;

