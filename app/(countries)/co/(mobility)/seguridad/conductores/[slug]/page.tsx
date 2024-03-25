import FeaturePage, { generateFeaturesMetadata, generateFeaturesStaticParams } from "@/components/Sections/Features";

interface FeatureProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params: { slug } }: FeatureProps) {
  const feature = await generateFeaturesMetadata(slug, "co");
  return feature;
}

export async function generateStaticParams() {
  const featuresSlugs = await generateFeaturesStaticParams("co", "driver");

  return featuresSlugs;
}

const Page = ({ params: { slug } }: FeatureProps) => {

  return (
    <FeaturePage
      params={{
        countryCode: 'co',
        pathname: '/co/seguridad/conductores/slug/',
        slug,
        featureCategory: 'driver'
      }}
    />
  )
}


export default Page