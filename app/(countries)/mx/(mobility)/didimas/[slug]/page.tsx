import React from "react";
import {
  fetchCities,
  fetchPartnerBySlug,
  fetchPartnersByCategory,
} from "@/utils/db";
import { Metadata } from "next";
import CTASection from "@/components/CTASection";
import RichContent from "@/components/RichContent";
import { notFound } from "next/navigation";
import { City, ColumnSectionT, PartnerT } from "@/typings";
import ColumnsSection from "@/components/ColumnSection";

interface GuiasProps {
  params: {
    slug: string;
  };
}

export let metadata: Metadata = {
  title: "Registrate como Socio Conductor DiDi",
  description:
    "DiDi en Mexico, registrate como socio conductor en las categorías express y taxi ganando más y manejando menos. Si sos Socio Conductor llamános al +54 (11) 3987-6342",
};

const Guide = async ({ params: { slug } }: GuiasProps) => {
  const partner = await fetchPartnerBySlug("mx", slug);
  const partners = (await fetchPartnersByCategory("mx", "didimas")).filter(
    (partner: PartnerT) => partner.slug !== slug
  );
  if (!partner) return notFound();

  const heroProps = {
    title: partner.heroTitle,
    desc: partner.heroDesc,
    bgColor: "bg-orange-primary",
    textColor: "white",
    image: partner.logo,
    btnType: "custom",
    btnMode: "light",
    btnLink: partner.promoLink,
    btnText: partner.promoLinkText,
    brightness: "brightness-75",
    reverse: true,
    isHero: true,
  };

  const ctaFeaturesProps = {
    title: partner.featureTitle,
    desc: partner.featureDesc,
    image: partner.featureImage,
    bgColor: "bg-gray-light",
    textColor: "bg-gray-primary",
    btnType: "custom",
    btnMode: "primary",
    btnLink: partner.promoLink,
    btnText: partner.promoLinkText,
    brightness: "brightness-75",
  };

  const columnSectionProps = {
    title: "Esto es solo el comienzo, pronto vendrán más promociones",
    columns: partners?.map((partner: PartnerT) => {
      return {
        title: partner.name,
        desc: partner.desc,
        image: partner.logo,
        pathname: `/mx/didimas/${partner.slug}`,
      };
    }),
    bgColor: "bg-white",
    gap: 10,
    textColor: "text-gray-primary",
    gridCols: 3,
  };

  return (
    <>
      <CTASection {...heroProps}></CTASection>
      {partner?.featureTitle && <CTASection {...ctaFeaturesProps}></CTASection>}
      <section className="container mx-auto mb-32 text-gray-primary md:px-28 mt-16">
        <RichContent richContent={partner.content}></RichContent>
      </section>
      <ColumnsSection {...columnSectionProps}></ColumnsSection>
    </>
  );
};

export default Guide;

export async function generateStaticParams() {
  const partners = await fetchPartnersByCategory("mx", "didimas");
  const partnersSlugs = partners.map((city: PartnerT) => {
    return {
      slug: city.slug,
    };
  });
  return partnersSlugs;
}
