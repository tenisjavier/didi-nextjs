import React from "react";
import { fetchCountries } from "@/utils/db";
import Link from "next/link";
import Image from "next/image";
import FooterLink from "@/components/Footer/FooterLink";
import { CountryCode, LanguageCode, BusinessType, Country } from "@/typings";
import { getFooterTarjetaDeCreditoLinks } from "@/config/footer/footer-tarjeta-de-credito-config";
import { getFooterLoanLinks } from "@/config/footer/footer-loan-config";
import FooterCard from "./FooterCard";

interface FooterProps {
  countryCode: CountryCode;
  languageCode: LanguageCode;
  businessType: BusinessType;
}

const Footer = async ({
  countryCode,
  languageCode,
  businessType,
}: FooterProps) => {
  let countries = await fetchCountries();
  let countryName: string;
  let imageSrc = "/images/logos/android-ios-english.png";
  let logo = (
    <Image
      src="/images/logos/didi-logo-white.png"
      alt="DiDi"
      width={180}
      height={83}
    />
  );
  if (languageCode === "es") imageSrc = "/images/logos/android-ios-spanish.png";
  if (languageCode === "ar") imageSrc = "/images/logos/android-ios-arabic.png";

  if (businessType === "food") {
    logo = (
      <Image
        src="/images/logos/didi-food-logo.png"
        alt="DiDi Food"
        width={180}
        height={83}
        className="h-12 w-auto"
      />
    );

    countries = countries.filter(
      (c: Country) =>
        c.code === "mx" || c.code === "pe" || c.code === "cr" || c.code === "co"
    );
  }


  const footerCard = {
    card: getFooterTarjetaDeCreditoLinks(countryCode),
    loan: getFooterLoanLinks(countryCode)
  }

  return (
    <>
      {businessType === 'card' || businessType === 'loan' ? (
        <FooterCard {...footerCard[businessType]} />
      ) : (
        <footer className="pb-36 lg:pb-0 bg-gray-primary">
          <div className="border-buffer h-32 border-x-0 border-b-2 border-t-0 border-solid border-white text-white ">
            <div className="container mx-auto h-full">
              <FooterLink
                countryCode={countryCode}
                businessType={businessType}
              ></FooterLink>
            </div>
          </div>

          <div className="h-96  lg:h-80">
            <div className="container mx-auto flex h-full flex-wrap">
              <div className="flex h-1/2 w-full flex-initial flex-col items-center justify-center lg:h-full lg:w-1/2 lg:items-start">
                <Link href="/">{logo}</Link>

                <div className="text-c h-auto w-3/4 lg:w-full lg:pr-52 lg:text-left">
                  {countries.map((c: Country, index: number) => {
                    switch (languageCode) {
                      case "es":
                        countryName = c.spanishName;
                        break;
                      case "ar":
                        countryName = c.arabicName;
                        break;
                      case "en":
                        countryName = c.englishName;
                        break;
                      default:
                        return c.englishName;
                    }

                    return (
                      <span key={index} className="text-white">
                        {index !== 0 ? " • " : null}
                        <Link
                          href={businessType === "food" ? `${c.path}food/` : c.path}
                          className="text-sm text-yellow-500 hover:text-yellow-300"
                        >
                          {countryName}
                        </Link>
                      </span>
                    );
                  })}
                </div>
              </div>
              {businessType !== "food" && (
                <div className="flex h-1/2 w-full flex-initial flex-wrap items-center justify-center px-24 lg:h-full lg:w-1/2 xl:px-32 ">
                  <div className="flex w-full justify-center lg:w-auto">
                    <a href="https://global-rides-passenger.onelink.me/xNlo/globalhomepage">
                      <Image
                        alt="Logo Stores"
                        src={imageSrc}
                        width={200}
                        height={123}
                      ></Image>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
