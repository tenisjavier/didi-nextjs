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

export async function generateMetadata({ params: { slug } }: LegalProps) {
  const legal = await fetchLegalBySlug("mx", slug);
  if (!legal) return notFound();

  return {
    title: legal.name,
    description: legal.content.json.content[0].content[0].value,
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
  const legalSlugs = await generateLegalStaticParams("mx");
  return legalSlugs;
}

const Legal = async ({ params: { slug } }: LegalProps) => {
  const legal = await fetchLegalBySlug("mx", slug);
  return (
    <>
      <section className="container mx-auto text-gray-primary md:px-28 pt-48 pb-32 bg-gray-light">
        <RichContent richContent={legal.content}></RichContent>
      </section>
    </>
  );
};

export default Legal;
