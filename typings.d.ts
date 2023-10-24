import { z } from "zod";
import { BtnType, BtnMode } from "./components/CTAButton";

const CountrySchema = z.enum([
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

const BusinessSchema = z.enum(["mobility", "food", "didipay", "card", "loan"]);

const ImageSchema = z.object({
  title: z.string(),
  url: z.string(),
  description: z.string(),
});

const CitySchema = z.object({
  name: z.string(),
  slug: z.string(),
  country: z.object({
    code: CountrySchema,
  }),
  image: ImageSchema,
});

//? Section Components Schemas
const CTASectionSchema = z.object({
  name: z.string(),
  isHero: z.boolean(),
  title: z.string(),
  desc: z.string().optional(),
  bullets: z.array(z.string()).optional(),
  textColor: z.string(),
  bgColor: z.string(),
  bgImage: ImageSchema.optional(),
  mobileBgImage: ImageSchema.optional(),
  image: ImageSchema.optional(),
  btnType: BtnType.optional(),
  btnMode: BtnMode.optional(),
  btnText: BtnType.optional(),
  btnLink: BtnMode.optional(),
  reverse: z.boolean().optional(),
});

export type CountryCode = z.infer<typeof CountrySchema>;
export type BusinessType = z.infer<typeof BusinessSchema>;
export type ImageType = z.infer<typeof ImageSchema>;
export type City = z.infer<typeof CitySchema>;
export type CTASectionT = z.infer<typeof CTASectionSchema>;

export type PageComponent = { id: string; __typename: string };
