import FeaturePage, { generateFeaturesMetadata, generateFeaturesStaticParams } from "@/components/Sections/Features";

interface FeatureProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params: { slug } }: FeatureProps) {
  const feature = await generateFeaturesMetadata(slug, "cl");
  return feature;
}

export async function generateStaticParams() {
  const featuresSlugs = await generateFeaturesStaticParams("cl", "pax");

  return featuresSlugs;
}

const Page = ({ params: { slug } }: FeatureProps) => {

  return (
    <FeaturePage
      params={{
        countryCode: 'cl',
        pathname: '/cl/seguridad/pasajeros/slug/',
        slug,
        featureCategory: 'pax'
      }}
    />
  )
}


export default Page