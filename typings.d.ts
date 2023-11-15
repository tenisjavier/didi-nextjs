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
const BusinessSchema = z.enum(["mobility", "food", "pay", "card", "loan"]);

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
  title: z.string(),
  desc: z.string().nullish(),
  textColor: z.string(),
  bgColor: z.string(),
  image: ImageSchema.nullish(),
  btnType: BtnType.nullish(),
  btnMode: BtnMode.nullish(),
  btnText: BtnType.min(5).max(30).nullish(),
  btnLink: BtnMode.nullish(),
});

const ColumnSectionSchema = z.object({
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
  btnType: BtnType.nullish(),
  btnMode: BtnMode.nullish(),
  btnText: BtnType.min(5).max(30).nullish(),
  btnLink: BtnMode.nullish(),
  reverse: z.boolean().nullish(),
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
export type CarouselSectionT = z.infer<typeof CarouselSectionSchema>;
export type AccordionT = z.infer<typeof AccordionSchema>;
export type AccordionSectionT = z.infer<typeof AccordionSectionSchema>;
export type BannerT = z.infer<typeof BannerSchema>;

export type PageComponent = { id: string; __typename: string };
