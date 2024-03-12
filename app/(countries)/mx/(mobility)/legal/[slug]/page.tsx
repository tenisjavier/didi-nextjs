import React from "react";
import { fetchLegalBySlug } from "@/utils/db";
import { notFound } from "next/navigation";
import RichContent from "@/components/RichContent";

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
