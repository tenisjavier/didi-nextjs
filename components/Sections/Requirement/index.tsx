import React from "react";
import {
  fetchPageComponents,
  fetchRequirementBySlug,
  fetchRequirements,
} from "@/utils/db";
import { CountryCode } from "@/typings";
import BuilderComponent from "@/components/BuilderComponent";

interface RequirementProps {
  params: {
    slug: string;
    countryCode: CountryCode;
    pathname: string;
  };
}

// or Dynamic metadata
export async function generateRequirementsMetadata(
  slug: string,
  countryCode: CountryCode
) {
  const requirement = (await fetchRequirementBySlug(countryCode, slug))
    .items?.[0];

  return {
    title: requirement.name,
  };
}

const Page = async ({
  params: { slug, countryCode, pathname },
}: RequirementProps) => {
  const requirementContent = await fetchRequirementBySlug(countryCode, slug);

  const requirement = requirementContent?.items?.[0];

  const components = await fetchPageComponents(pathname);

  return (
    <>
      <BuilderComponent
        components={components}
        textParams={{
          ctaSectionParams: {
            title: `Driver Requirements for ${requirement.name}`,
            bgImage: requirement.image,
          },
          richTextParams: requirement.requirement,
        }}
      ></BuilderComponent>
    </>
  );
};

export default Page;
