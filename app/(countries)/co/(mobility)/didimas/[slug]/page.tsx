import React from "react";
import PartnerPage, { generatePartnerMetadata, generatePartnersStaticParams } from "@/components/Sections/Partners";

interface PartnersProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params: { slug } }: PartnersProps) {
  const partner = await generatePartnerMetadata(slug, "co");
  partner.title = partner.title + " | DiDi Colombia";
  return partner;
}

export async function generateStaticParams() {
  const partnersSlugs = await generatePartnersStaticParams("co", "didimas");

  return partnersSlugs;
}

const Page = async ({ params: { slug } }: PartnersProps) => {
  return (
    <PartnerPage
      params={{
        countryCode: 'co',
        pathname: '/co/didimas/slug/',
        slug
      }}
    />
  );
};

export default Page;


