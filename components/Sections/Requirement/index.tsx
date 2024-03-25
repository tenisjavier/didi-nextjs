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

export async function generateRequirementMetadata(
  slug: string,
  countryCode: CountryCode
) {
  const requirement = await fetchRequirementBySlug(countryCode, slug);

  return {
    title: requirement.name,
    description:
      requirement.requirement.json.content[0].content[0]?.value?.slice(0, 150),
  };
}

export async function generateRequirementStaticParams(
  countryCode: CountryCode
) {
  const requirements = (await fetchRequirements(countryCode))?.items;
  const requirementsSlugs = requirements?.map(
    (requirement: { slug: string }) => {
      slug: requirement.slug;
    }
  );

  return requirementsSlugs;
}

const Page = async ({
  params: { slug, countryCode, pathname },
}: RequirementProps) => {
  const requirement = await fetchRequirementBySlug(countryCode, slug);
  const components = await fetchPageComponents(pathname);

  return (
    <>
      <BuilderComponent
        components={components}
        textParams={{
          ctaSectionParams: {
            title: `Driver Requirements for ${requirement.name}`,
          },
          richTextParams: requirement.requirement,
        }}
      ></BuilderComponent>
    </>
  );
};

export default Page;
