import React from "react";
import { Metadata } from "next";
import { fetchFAQBySlug, fetchImages } from "@/utils/db";
import { notFound } from "next/navigation";
import AccordionSection from "@/components/AccordionSection/";
import CTASection from "@/components/CTASection";

interface FAQProps {
  params: {
    slug: string;
  };
}

export let metadata: Metadata = {
  title: "Registrate como Socio Conductor DiDi",
  description:
    "DiDi en Argentina, registrate como socio conductor en las categorías express y taxi ganando más y manejando menos. Si sos Socio Conductor llamános al +54 (11) 3987-6342",
};

const CentroDeAyuda = async ({ params: { slug } }: FAQProps) => {
  const [faq, bgImage] = await Promise.all([
    fetchFAQBySlug("nz", slug),
    fetchImages(["mx.HelpCenterHero.bgImage"]),
  ]);
  if (!faq) return notFound();
  const content = faq.content.json.content[0].content[0].value;
  metadata = faq.title
    ? {
      title: faq.title,
      description: content.slice(0, 150),
    }
    : metadata;

  const heroProps = {
    title: faq.title,
    bgColor: "bg-white",
    textColor: "white",
    btnType: "both",
    btnMode: "primary",
    brightness: "brightness-75",
    bgImage: bgImage[0],
  };

  const accordionProps = {
    title: "",
    desc: "",
    bgColor: "bg-white",
    textColor: "gray-primary",
    textAccordionColor: "orange-primary",
    bgAccordionColor: "bg-gray-light",
    isClosed: false,
    RTL: false,
    isFaq: true,
    items: [
      {
        title: faq.title as string,
        content: faq.content,
        slug: faq.slug as string,
        isFaq: true,
        bgColor: "bg-gray-light",
        textColor: "gray-primary",
        isClosed: false,
        type: "faq",
      },
    ],
  };

  return (
    <>
      <CTASection {...heroProps}></CTASection>
      <AccordionSection {...accordionProps}></AccordionSection>
    </>
  );
};

export default CentroDeAyuda;
