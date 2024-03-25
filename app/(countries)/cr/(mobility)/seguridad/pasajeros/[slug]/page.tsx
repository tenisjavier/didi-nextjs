import FeaturePage, { generateFeaturesMetadata, generateFeaturesStaticParams } from "@/components/Sections/Features";

interface FeatureProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params: { slug } }: FeatureProps) {
  const article = await generateFeaturesMetadata(slug, "cr");
  return article;
}

export async function generateStaticParams() {
  const featuresSlugs = await generateFeaturesStaticParams("cr", "pax");

  return featuresSlugs;
}

const Page = ({ params: { slug } }: FeatureProps) => {

  return (
    <FeaturePage
      params={{
        countryCode: 'cr',
        pathname: '/cr/seguridad/pasajeros/slug/',
        slug,
        featureCategory: 'pax'
      }}
    />
  )
}


export default Page