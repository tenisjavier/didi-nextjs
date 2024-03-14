import React from "react";
import PartnerPage, { generatePartnerMetadata, generatePartnersStaticParams } from "@/components/Sections/Partners";

interface PartnersProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params: { slug } }: PartnersProps) {
  const partner = await generatePartnerMetadata(slug, "cl");
  partner.title = partner.title + " | DiDi Chile";
  return partner;
}

export async function generateStaticParams() {
  const partnersSlugs = await generatePartnersStaticParams("cl", "didimas");

  return partnersSlugs;
}

const Page = async ({ params: { slug } }: PartnersProps) => {
  return (
    <PartnerPage
      params={{
        countryCode: 'cl',
        pathname: '/cl/didimas/slug/',
        slug
      }}
    />
  );
};

export default Page;


