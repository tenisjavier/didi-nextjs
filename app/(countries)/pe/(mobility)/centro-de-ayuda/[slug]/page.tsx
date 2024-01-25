import React from "react";
import { fetchFAQBySlug, fetchImages } from "@/utils/db";
import { notFound } from "next/navigation";
import AccordionSection from "@/components/AccordionSection/";
import CTASection from "@/components/CTASection";
import { CTASectionT } from "@/typings";

interface FAQProps {
  params: {
    slug: string;
  };
}

// or Dynamic metadata
export async function generateMetadata({ params: { slug } }: FAQProps) {
  const faq = await fetchFAQBySlug("pe", slug);
  const content = faq.content.json.content[0].content[0].value;
  console.log(content);
  return {
    title: `${faq.title} | DiDi Perú `,
    description: content.slice(0, 150) + "...",
  };
}

const CentroDeAyuda = async ({ params: { slug } }: FAQProps) => {
  const [faq, bgImage] = await Promise.all([
    fetchFAQBySlug("pe", slug),
    fetchImages(["mx.HelpCenterHero.bgImage"]),
  ]);
  if (!faq) return notFound();

  const heroProps: CTASectionT = {
    title: faq.title,
    bgColor: "bg-white",
    textColor: "white",
    btnType: "both",
    btnMode: "primary",
    brightness: "brightness-75",
    bgImage: bgImage[0],
    isHero: true,
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
