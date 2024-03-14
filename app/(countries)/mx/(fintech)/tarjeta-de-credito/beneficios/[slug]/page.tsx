import React from "react";
import PartnerPage, { generatePartnerMetadata, generatePartnersStaticParams } from "@/components/Sections/Partners";

interface PartnersProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params: { slug } }: PartnersProps) {
  const partner = await generatePartnerMetadata(slug, "mx");
  partner.title = partner.title + " | DiDi México";
  return partner;
}

export async function generateStaticParams() {
  const partnersSlugs = await generatePartnersStaticParams("mx", "creditCard");

  return partnersSlugs;
}

const Page = async ({ params: { slug } }: PartnersProps) => {
  return (
    <PartnerPage
      params={{
        countryCode: 'mx',
        pathname: '/mx/tarjeta-de-credito/beneficios/slug/',
        slug
      }}
    />
  );
};

export default Page;


