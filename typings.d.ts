import { z } from "zod";
import { BtnType, BtnMode } from "@/components/Btn";

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
  btnText: BtnType.min(5).max(30).optional(),
  btnLink: BtnMode.optional(),
  reverse: z.boolean().optional(),
});

const CardSchema = z.object({
  name: z.string(),
  title: z.string(),
  desc: z.string().optional(),
  textColor: z.string(),
  bgColor: z.string(),
  image: ImageSchema.optional(),
  btnType: BtnType.optional(),
  btnMode: BtnMode.optional(),
  btnText: BtnType.min(5).max(30).optional(),
  btnLink: BtnMode.optional(),
});

const ColumnSectionSchema = z.object({
  name: z.string(),
  title: z.string().optional(),
  desc: z.string().optional(),
  textColor: z.string(),
  bgColor: z.string(),
  sectionID: z.string().optional(),
  RTL: z.boolean().optional(),
  hasTextHighlight: z.boolean().optional(),
  textHighlightStyles: z.string().optional(),
  gridCols: z.number(),
  gap: z.number(),
  columns: z.array(CardSchema),
});

export type CountryCode = z.infer<typeof CountrySchema>;
export type BusinessType = z.infer<typeof BusinessSchema>;
export type ImageType = z.infer<typeof ImageSchema>;
export type City = z.infer<typeof CitySchema>;
export type CTASectionT = z.infer<typeof CTASectionSchema>;
export type CardT = z.infer<typeof CardSchema>;
export type ColumnSectionT = z.infer<typeof ColumnSectionSchema>;

export type PageComponent = { id: string; __typename: string };
