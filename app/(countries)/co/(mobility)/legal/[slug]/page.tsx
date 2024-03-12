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
  const legal = await fetchLegalBySlug("co", slug);
  if (!legal) return notFound();

  return {
    title: legal.name,
    description: legal.content.json.content[0].content[0].value,
  };
}

const Legal = async ({ params: { slug } }: LegalProps) => {
  const legal = await fetchLegalBySlug("co", slug);
  return (
    <>
      <section className="container mx-auto mb-32 text-gray-primary md:px-28 pt-16">
        <RichContent richContent={legal.content}></RichContent>
      </section>
    </>
  );
};

export default Legal;
