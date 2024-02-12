import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchPageComponents } from "@/utils/db";
import { hreflangs } from "@/config/seo/hreflang";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "انضم لشركائنا السائقين | DiDi Egypt",
  description:
    "ابدأ في تحقيق دخل متميز مع رسوم الخدمة التنافسية والدعم المحلي وميزات السلامة الرائدة.",
  alternates: {
    canonical: `https://web.didiglobal.com/eg/driver/`,
    languages: hreflangs.drv,
  },
};

const Conductor = async () => {
  const components = await fetchPageComponents("/eg/driver/");
  return <BuilderComponent components={components}></BuilderComponent>;
};

export default Conductor;
