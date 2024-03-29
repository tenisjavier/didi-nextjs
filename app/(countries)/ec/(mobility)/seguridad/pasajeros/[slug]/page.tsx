import FeaturePage, { generateFeaturesMetadata, generateFeaturesStaticParams } from "@/components/Sections/Features";

interface FeatureProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params: { slug } }: FeatureProps) {
  const feature = await generateFeaturesMetadata(slug, "ec");
  return feature;
}

export async function generateStaticParams() {
  const featuresSlugs = await generateFeaturesStaticParams("ec", "pax");

  return featuresSlugs;
}

const Page = ({ params: { slug } }: FeatureProps) => {

  return (
    <FeaturePage
      params={{
        countryCode: 'ec',
        pathname: '/ec/seguridad/pasajeros/slug/',
        slug,
        featureCategory: 'pax'
      }}
    />
  )
}


export default Page