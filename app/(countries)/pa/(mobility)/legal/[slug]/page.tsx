import React from "react";
import { fetchLegalBySlug, fetchLegals } from "@/utils/db";
import { notFound } from "next/navigation";
import RichContent from "@/components/RichContent";
import { CountryCode } from "@/typings";

interface FAQProps {
  params: {
    slug: string;
  };
}

// or Dynamic metadata
export async function generateMetadata({ params: { slug } }: FAQProps) {
  const legal = await fetchLegalBySlug("pa", slug);
  const content = legal.content.json.content[0].content[0].value;
  return {
    title: legal.name + " | DiDi Panamá",
    description: content.slice(0, 150),
  };
}

async function generateLegalStaticParams(countryCode: CountryCode) {
  const legals = (await fetchLegals(countryCode)).items;
  console.log(legals);
  const legalSlugs = legals.map((legal: any) => {
    slug: legal.slug;
  });
  return legalSlugs;
}

export async function generateStaticParams() {
  const legalSlugs = await generateLegalStaticParams("pa");
  return legalSlugs;
}

const Legal = async ({ params: { slug } }: FAQProps) => {
  const legal = await fetchLegalBySlug("pa", slug);
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
