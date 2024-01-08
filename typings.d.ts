import React from "react";
import { z } from "zod";
import { BtnType, BtnMode } from "@/components/Btn";

const CountryCodeSchema = z.enum([
  "mx",
  "cl",
  "ar",
  "pe",
  "co",
  "ec",
  "do",
  "cr",
  "pa",
  "nz",
  "au",
  "en",
  "eg",
]);
const languageCodeSchema = z.enum(["es", "en", "ar"]);
const BusinessSchema = z.enum([
  "mobility",
  "food",
  "pay",
  "card",
  "loan",
  "drive",
]);

const ImageSchema = z.object({
  title: z.string(),
  url: z.string(),
  description: z.string(),
  width: z.nullable(),
  height: z.nullable(),
  sys: z
    .object({
      id: z.string(),
    })
    .nullish(),
});

const CitySchema = z.object({
  name: z.string(),
  slug: z.string(),
  country: z.object({
    code: CountrySchema,
  }),
  image: ImageSchema,
});
const CountrySchema = z.object({
  name: z.string(),
  arabicName: z.string(),
  englishName: z.string(),
  spanishName: z.string(),
  hostname: z.string(),
  code: z.string(),
});

const ComponentsJSONSchema = z.object({
  meta: z.array({
    title: z.string(),
    desc: z.string(),
    bullets: z.array(z.string()),
    image: ImageSchema.nullish(),
  }),
});

//? Section Components Schemas
const CTASectionSchema = z.object({
  name: z.string(),
  isHero: z.boolean(),
  title: z.string(),
  desc: z.string().nullish(),
  bullets: z.array(z.string()).nullish(),
  textColor: z.string(),
  bgColor: z.string(),
  bgImage: ImageSchema.nullish(),
  mobileBgImage: ImageSchema.nullish(),
  image: ImageSchema.nullish(),
  rounded: z.enum(["rounded", "rounded-full"]),
  btnType: BtnType.nullish(),
  btnMode: BtnMode.nullish(),
  btnText: BtnType.min(5).max(30).nullish(),
  btnLink: BtnMode.nullish(),
  reverse: z.boolean().nullish(),
});

const CardSchema = z.object({
  name: z.string(),
  title: z.union([z.string(), React.ReactNode]),
  desc: z.string().nullish(),
  textColor: z.string(),
  bgColor: z.string(),
  image: z.union([ImageSchema.nullish(), React.ReactNode]),
  video: z.string().nullish(),
  btnType: BtnType.nullish(),
  btnMode: BtnMode.nullish(),
  btnText: BtnType.min(5).max(30).nullish(),
  btnLink: BtnMode.nullish(),
  isImageIcon: z.boolean().nullish(),
  pathname: z.string().nullish(),
});

const ColumnSectionSchema = z.object({
  name: z.string().nullish(),
  title: z.string().nullish(),
  desc: z.string().nullish(),
  textColor: z.string(),
  bgColor: z.string(),
  sectionID: z.string().nullish(),
  RTL: z.boolean().nullish(),
  hasTextHighlight: z.boolean().nullish(),
  textHighlightStyles: z.string().nullish(),
  gridCols: z.number(),
  gap: z.number(),
  columns: z.array(CardSchema),
  items: z.array(CardSchema),
  pagination: z.object({
    total: z.number(),
    limit: z.number(),
    skip: z.number(),
  }),
  country: z.object(CountrySchema),
  itemType: z.enum(["Article", "Guide", "Partner"]),
  articleCategory: z.enum(["news"]),
  guideCategory: z.enum(["driver", "delivery", "restaurant"]),
});

const ColumnImageSchema = z.object({
  name: z.string(),
  title: z.string().nullish(),
  desc: z.string().nullish(),
  textColor: z.string(),
  bgColor: z.string(),
  sectionID: z.string().nullish(),
  RTL: z.boolean().nullish(),
  hasTextHighlight: z.boolean().nullish(),
  textHighlightStyles: z.string().nullish(),
  gridCols: z.number(),
  gap: z.number(),
  columns: z.array(CardSchema),
  image: ImageSchema.nullish(),
  imageAlignment: z.enum(["left", "right", "center"]),
  rounded: z.enum(["rounded", "rounded-full"]),
});

const CarouselSectionSchema = z.object({
  name: z.string(),
  textColor: z.string(),
  bgColor: z.string(),
  sections: z.array(CTASectionSchema),
  icons: z.array(ImageSchema),
  menu: z.array(z.string()),
});

const AccordionSchema = z.object({
  title: z.string(),
  content: z.any(),
  slug: z.string(),
  bgColor: z.string(),
  textColor: z.string(),
  isClosed: z.boolean(),
  type: z.string(),
  isFaq: z.boolean(),
});

const AccordionSectionSchema = z.object({
  items: z.array(AccordionSchema),
  title: z.string(),
  desc: z.string().optional(),
  textColor: z.string(),
  bgColor: z.string(),
  textAccordionColor: z.string(),
  bgAccordionColor: z.string(),
  isClosed: z.boolean(),
  RTL: z.boolean(),
  isFaq: z.boolean(),
});
const BannerSchema = z.object({
  name: z.string(),
  title: z.string(),
  desc: z.string().nullish(),
  bgColor: z.string(),
  textColor: z.string(),
  image: ImageSchema.nullish(),
  imageBottom: z.boolean().nullish(),
  btnType: BtnType.nullish(),
  btnMode: BtnMode.nullish(),
  btnText: BtnType.min(5).max(30).nullish(),
  btnLink: BtnMode.nullish(),
  reverse: z.boolean().nullish(),
  video: z.string().nullish(),
});
const OptionsSchema = z.object({
  name: z.string(),
  title: z.string(),
  image: ImageSchema(),
  bullets: z.array(z.string()),
  isActive: z.boolean(),
});

const OptionsSectionSchema = z.object({
  name: z.string(),
  title: z.string(),
  desc: z.string().nullish(),
  bgColor: z.string(),
  textColor: z.string(),
  optionsTitle: z.string(),
  optionsBulletTitle: z.string(),
  optionsBulletDesc: z.string(),
  options: z.array(OptionsSchema),
  btnType: BtnType.nullish(),
  btnMode: BtnMode.nullish(),
  btnText: BtnType.min(5).max(30).nullish(),
  btnLink: BtnMode.nullish(),
});

const CarouselSchema = z.object({
  title: z.string(),
  slides: z.array(BannerSchema),
  images: z.array(ImageSchema),
  ctaSection: z.array(CTASectionSchema),
  carouselType: z.enum(["Banner", "Images", "CTASection"]),
  slidesToShow: z.number(),
  slidesToScroll: z.number(),
  arrowNext: z.string(),
  arrowPrev: z.string(),
  arrowColor: z.string(),
  isAutoPlay: z.boolean(),
  speedAutoPlay: z.number(),
  imagesMobile: z.array(ImageSchema),
  imageContainerStyle: z.string(),
  imageStyle: z.string(),
  slidesToShowMobile: z.number(),
  hasDots: z.boolean(),
  hasArrows: z.boolean(),
  maxWidth: z.string(),
});

const ListSectionSchema = z.object({
  title: z.string(),
  desc: z.string().nullish(),
  bgColor: z.string(),
  textColor: z.string(),
  items: z.array(ListItemSchema),
});

const ListItemSchema = z.object({
  text: z.string(),
  secondText: z.string().nullish(),
  link: z.string(),
  image: z.ImageSchema().nullish(),
});

const FAQSchema = z.object({
  title: z.string(),
  slug: z.string(),
  type: z.any(), //!FIX and rename category as other components
  country: z.countryCodeSchema(),
  content: z.any(),
  isEducationalGuide: z.boolean(),
  relatedCity: z.string().nullish(),
});

const GuideSchema = z.object({
  total: z.number(),
  limit: z.number(),
  skip: z.number(),
  items: z.array({
    title: z.string(),
    slug: z.string(),
    excerpt: z.string(),
    category: z.enum(["driver", "delivery", "restaurant"]),
    country: z.countryCodeSchema(),
    seoTitle: z.string(),
    seoDescription: z.string(),
    btnCustomText: z.string(),
    btnCustomLink: z.string(),
    featuredImage: z.ImageSchema(),
    featuredImageMobile: z.ImageSchema(),
    content: z.any(),
  })
});

const ArticleSchema = z.object({
  items: z.array({
    title: z.string(),
    slug: z.string(),
    seoTitle: z.string(),
    seoDescription: z.string(),
    featuredImage: z.ImageSchema(),
    content: z.any(),
    excerpt: z.string(),
    country: z.countryCodeSchema(),
  }),
  total: z.number(),
  limit: z.number(),
  skip: z.number(),
});

const LegalSchema = z.object({
  title: z.string(),
  slug: z.string(),
  content: z.any(),
  country: z.countryCodeSchema(),
});

const PartnerSchema = z.object({
  name: z.string(),
  slug: z.string(),
  logo: z.ImageSchema(),
  desc: z.string(),
  country: z.countryCodeSchema(),
  promoLink: z.string(),
  promoLinkText: z.string(),
  heroTitle: z.string(),
  heroDesc: z.string(),
  heroImage: z.ImageSchema(),
  featureTitle: z.string(),
  featureDesc: z.string(),
  featureImage: z.ImageSchema(),
  content: z.any(),
  category: z.enum(["creditCard", "didimas"]),
});

const FeaturesSchema = z.object({
  name: z.string(),
  description: z.string(),
  slug: z.string(),
  image: ImageSchema,
  country: z.countryCodeSchema(),
  content: z.any(),
  category: z.enum(["driver", "pax", "food"]),
  type: z.enum(["before", "during", "after"]),
  components: ComponentsJSONSchema,
  componentImages: z.array(ImageSchema),
});

export type CountryCode = z.infer<typeof CountryCodeSchema>;
export type LanguageCode = z.infer<typeof languageCodeSchema>;
export type BusinessType = z.infer<typeof BusinessSchema>;
export type ImageType = z.infer<typeof ImageSchema>;
export type City = z.infer<typeof CitySchema>;
export type Country = z.infer<typeof CountrySchema>;
export type CTASectionT = z.infer<typeof CTASectionSchema>;
export type CardT = z.infer<typeof CardSchema>;
export type ColumnSectionT = z.infer<typeof ColumnSectionSchema>;
export type ColumnImageT = z.infer<typeof ColumnImageSchema>;
export type CarouselSectionT = z.infer<typeof CarouselSectionSchema>;
export type AccordionT = z.infer<typeof AccordionSchema>;
export type AccordionSectionT = z.infer<typeof AccordionSectionSchema>;
export type BannerT = z.infer<typeof BannerSchema>;
export type OptionsSectionT = z.infer<typeof OptionsSectionSchema>;
export type OptionsT = z.infer<typeof OptionsSchema>;
export type CarouselT = z.infer<typeof CarouselSchema>;
export type ListSectionT = z.infer<typeof ListSectionSchema>;
export type ListItemT = z.infer<typeof ListItemSchema>;
export type FAQT = z.infer<typeof FAQSchema>;
export type GuideT = z.infer<typeof GuideSchema>;
export type ArticleT = z.infer<typeof ArticleSchema>;
export type LegalT = z.infer<typeof LegalSchema>;
export type PartnerT = z.infer<typeof PartnerSchema>;
export type FeaturesT = z.infer<typeof FeaturesSchema>;

export type PageComponent = { id: string; __typename: string };
