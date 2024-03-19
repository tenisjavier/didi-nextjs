import React from "react";
import RequirementPage, {
  generateRequirementsMetadata,
} from "@/components/Sections/Requirement";

interface RequirementsProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params: { slug },
}: RequirementsProps) {
  const requirement = await generateRequirementsMetadata(slug, "au");
  requirement.title = requirement.title + " | DiDi Australia";
  return requirement;
}

const Page = async ({ params: { slug } }: RequirementsProps) => {
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
