import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";
import Banner from "@/components/Banner";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title:
    "En DiDi tu Seguridad es nuestra prioridad conoce más acá | DiDi Panamá",
  description:
    "Conoce aquí las funcionalidades y medidas de seguridad que hemos tomado para que en tu próximo viajes lo disfrutes al máximo.",
};

// const bannerProps = {
//   title: "How it Works",
//   desc: "1. Requests are processed and analysed by our Law Enforcement Response Team who ensure that response deadlines are met in accordance with the urgency of the applicant.\n 2. By logging into the platform, Law Enforcement can see the history of requests sent to DiDi via the portal. Here, Law Enforcement can also download the response file and follow the request.",
//   textColor: "gray-primary",
//   bgColor: "bg-gray-light",
//   // btnType: "drv",
//   // btnMode: "light",
// };

const Seguridad = async () => {
  const components = await fetchPageComponents("/au/safety/law-enforcement-portal/");
  return (
    <>
      <BuilderComponent components={components}></BuilderComponent>
      {/* <Banner  {...bannerProps}></Banner> */}
    </>
  );
};

export default Seguridad;
