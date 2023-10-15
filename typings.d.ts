export type CountryCode =
  | "mx"
  | "cl"
  | "ar"
  | "pe"
  | "co"
  | "ec"
  | "do"
  | "cr"
  | "pa"
  | "nz"
  | "au"
  | "en"
  | "eg";

export type BusinessType = "mobility" | "food" | "didipay" | "card" | "loan";

export type ImageType = {
  title: string;
  url: string;
  description: string;
};

export type City = {
  name: string;
  slug: string;
  country: {
    code: CountryCode;
  };
  image: Image;
};
