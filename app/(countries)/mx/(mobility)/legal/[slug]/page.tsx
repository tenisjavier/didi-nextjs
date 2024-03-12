import React from "react";
import { fetchLegalBySlug } from "@/utils/db";
import { notFound } from "next/navigation";
import RichContent from "@/components/RichContent";

interface LegalProps {
  params: {
    slug: string;
  };
}

// or Dynamic metadata
export async function generateMetadata({ params: { slug } }: LegalProps) {
  const legal = await fetchLegalBySlug("mx", slug);
  if (!legal) return notFound();
  const content = legal.content.json.content[0].content[0].value;

  return {
    title: legal.name,
    description: content,
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
