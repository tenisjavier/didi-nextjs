import React from "react";
import { fetchLegalBySlug, fetchLegals } from "@/utils/db";
import { notFound } from "next/navigation";
import RichContent from "@/components/RichContent";
import { CountryCode } from "@/typings";

interface LegalProps {
  params: {
    slug: string;
  };
}

// or Dynamic metadata
export async function generateMetadata({ params: { slug } }: LegalProps) {
  const legal = await fetchLegalBySlug("pe", slug);
  const content = legal.content.json.content[0].content[0].value;
  return {
    title: legal.name + " | DiDi Perú",
    description: content.slice(0, 150),
  };
}

async function generateLegalStaticParams(countryCode: CountryCode) {
  const legals = (await fetchLegals(countryCode)).items;
  const legalSlugs = legals.map((legal: any) => {
    slug: legal.slug;
  });
  return legalSlugs;
}

export async function generateStaticParams() {
  const legalSlugs = await generateLegalStaticParams("pe");
  return legalSlugs;
}

const Legal = async ({ params: { slug } }: LegalProps) => {
  const legal = await fetchLegalBySlug("pe", slug);
  if (!legal) return notFound();
  return (
    <>
      <section className="container mx-auto mb-32 text-gray-primary md:px-28 pt-16">
        <RichContent richContent={legal.content}></RichContent>
      </section>
    </>
  );
};

export default Legal;
