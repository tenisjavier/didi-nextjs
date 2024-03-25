import React from "react";
import RequirementPage, {
  generateRequirementMetadata,
  generateRequirementStaticParams,
} from "@/components/Sections/Requirement";

interface RequirementProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params: { slug } }: RequirementProps) {
  const requirement = await generateRequirementMetadata(slug, "au");
  requirement.title = requirement.title + " | DiDi Australia";
  return requirement;
}

export async function generateStaticParams() {
  const requirementsSlugs = await generateRequirementStaticParams("au");
  return requirementsSlugs;
}

const Page = async ({ params: { slug } }: RequirementProps) => {
  return (
    <RequirementPage
      params={{
        countryCode: "au",
        pathname: "/au/driver/slug/",
        slug: slug,
      }}
    />
  );
};

export default Page;
