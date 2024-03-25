import FeaturePage, { generateFeaturesMetadata, generateFeaturesStaticParams } from "@/components/Sections/Features";

interface FeatureProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params: { slug } }: FeatureProps) {
  const feature = await generateFeaturesMetadata(slug, "pa");
  return feature;
}

export async function generateStaticParams() {
  const featuresSlugs = await generateFeaturesStaticParams("pa", "pax");

  return featuresSlugs;
}

const Page = ({ params: { slug } }: FeatureProps) => {

  return (
    <FeaturePage
      params={{
        countryCode: 'pa',
        pathname: '/pa/seguridad/pasajeros/slug/',
        slug,
        featureCategory: 'pax'
      }}
    />
  )
}


export default Page