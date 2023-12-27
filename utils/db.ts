//? Contentful fetches per content type, country and category
import { City, Country, CountryCode } from "@/typings";
import { ImageType } from "@/typings";
import { PageComponent } from "@/typings";
import {
  ArticleT,
  CTASectionT,
  ColumnSectionT,
  CarouselSectionT,
  AccordionSectionT,
  BannerT,
  OptionsSectionT,
  ColumnImageT,
  CarouselT,
  ListSectionT,
  ListItemT,
  GuideT,
  FAQT,
} from "@/typings";

//? Contentful API URL and Token from .env.local
const apiUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`;
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
};

//? returns a object of cities
//* params: country code from the country to fetch the cities
const fetchCities = async (
  countryCode: CountryCode,
  productCategory: string
): Promise<City[]> => {
  const query = `query {
    cityCollection(order: [name_ASC],where: {country:{code:"${countryCode}"}, product:{category_contains_some:"${productCategory}"}}){
      items{
        name
        slug
        country {
          code
        }
        image {
          title
          description
          url
        }

      }
    }
    }`;

  const res = await fetch(`${apiUrl}?query=${query}`, {
    headers: headers,
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch cities");
  }
  const cities = await res.json();
  return cities.data.cityCollection.items;
};

//* params: country code from the country to fetch the cities
const fetchCitieBySlug = async (
  countryCode: CountryCode,
  slug: string
): Promise<City> => {
  const query = `query {
    cityCollection(order: [name_ASC],where: {country:{code: "${countryCode}"}, slug: "${slug}" }){
      items{
        name
        slug
        country {
          code
        }
        image {
          title
          description
          url
        }
      }
    }
    }`;

  const res = await fetch(`${apiUrl}?query=${query}`, {
    headers: headers,
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch cities");
  }
  const cities = await res.json();
  return cities.data.cityCollection.items?.[0];
};

//? returns a object of cities
//* params: country code from the country to fetch the cities
const fetchCountries = async (): Promise<Country[]> => {
  const query = `query {
    countryCollection{
      items{
        name
        code
        languageCode
        arabicName
        englishName
        spanishName
        chineseName
        hostname
      }
    }
    }`;

  const res = await fetch(`${apiUrl}?query=${query}`, {
    headers: headers,
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch countries");
  }
  const countries = await res.json();
  return countries.data.countryCollection.items;
};

//? returns a object of components of a page
//* params: the pathname of the page ex: "/mx/food/"
const fetchPageComponents = async (
  pathname: string
): Promise<PageComponent[]> => {
  const query = `
  fragment ctaFields on CtaSection {
    __typename
    sys {
      id
    }
  }
  fragment columnFields on ColumnSection {
    __typename
    sys {
      id
    }
  }
  fragment carouselSectionFields on CarouselSection {
    __typename
    sys {
      id
    }
  }
  fragment carouselFields on Carousel {
    __typename
    sys {
      id
    }
  }
  fragment accordionFields on AccordionSection {
    __typename
    sys {
      id
    }
  }
  fragment bannerFields on Banner {
    __typename
    sys {
      id
    }
  }

  fragment optionsFields on OptionsSection {
    __typename
    sys {
      id
    }
  }

  fragment columnImageSectionFields on ColumnImageSection {

    __typename
    sys {
      id
    }
  }
  
  fragment listSectionFields on ListSection {

    __typename
    sys {
      id
    }
  }

  query {
    pageCollection(where: {pathname :"${pathname}"}) {
      items {
        componentsCollection(limit:10) {
          items {
           ...ctaFields
            ...columnFields
            ...carouselSectionFields
            ...accordionFields
            ...bannerFields
            ...optionsFields
            ...columnImageSectionFields
            ...carouselFields
            ...listSectionFields
          }
        }
      }
    }
  }`;

  const res = await fetch(`${apiUrl}?query=${query}`, {
    headers: headers,
    cache: "no-cache",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch page components");
  }
  const pageComponents = await res.json();

  const componentsToFetch =
    pageComponents.data.pageCollection.items[0].componentsCollection.items.map(
      (item: { sys: { id: string }; __typename: string }) => {
        return { id: item.sys?.id, __typename: item.__typename };
      }
    );

  return componentsToFetch;
};

//? returns one CTA component by its ID
//* params: id and type of the component
const fetchCTASectionById = async (id: string): Promise<CTASectionT> => {
  const query = `query {
    ctaSection(id:"${id}"){
      name
      isHero
      title
      desc
      bullets
      textColor
      bgColor
      bgImage {
        title
        description
        url
      }
      mobileBgImage{
        title
        description
        url
      }
      image{
        title
        description
        url
      }
      rounded
      btnType
      btnMode
      btnText
      btnLink
      reverse
    }
    }`;

  const res = await fetch(`${apiUrl}?query=${query}`, {
    headers: headers,
    cache: "no-cache",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch ctaSection");
  }
  const { data } = await res.json();
  return data.ctaSection;
};

//? returns one Column component by its ID
//* params: id of the component
const fetchOptionsSectionById = async (
  id: string
): Promise<OptionsSectionT> => {
  const query = `query {
    optionsSection(id:"${id}"){
      name
      title
      desc
      textColor
      bgColor
      optionsTitle
      optionsBulletTitle
      optionsBulletDesc
      optionsCollection{
        items{
          name
          title
          image {
            title
            description
            url
          }
          bullets
          }
        }
      btnType
      btnMode
      btnText
      btnLink
      }
    }`;

  const res = await fetch(`${apiUrl}?query=${query}`, {
    headers: headers,
    cache: "no-cache",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch optionsSection");
  }
  const { data } = await res.json();
  const optionsSection = {
    ...data.optionsSection,
    options: data.optionsSection?.optionsCollection.items,
  };
  delete optionsSection.optionsCollection;
  return optionsSection;
};

//? returns one Column component by its ID
//* params: id of the component
const fetchColumnImageSectionById = async (
  id: string
): Promise<ColumnImageT> => {
  const query = `query {
    columnImageSection(id:"${id}"){
      name
      title
      desc
      textColor
      bgColor
      gridCols
  		gap
      image{
        title
        description
        url
      }
      columnsCollection{
        items{
          name
          title
          desc
          textColor
          bgColor
          image {
            title
            description
            url
          }
        }
      }
    }
  }`;
  const res = await fetch(`${apiUrl}?query=${query}`, {
    headers: headers,
    cache: "no-cache",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch columnSection");
  }
  const { data } = await res.json();
  const columnImageSection = {
    ...data.columnImageSection,
    columns: data.columnImageSection?.columnsCollection.items,
  };
  delete columnImageSection.columnsCollection;
  return columnImageSection;
};

//? returns one Carousel component by its ID
//* params: id of the component
const fetchCarouselById = async (id: string): Promise<CarouselT> => {
  const query = `query {
    carousel(id:"${id}"){
      name
      maxWidth
      title
      slidesCollection{
        items{
          title
          name
          textColor
          bgColor
          btnType
          btnMode
          btnText
          btnLink
          reverse
          image{
            title
            description
            url
            width
            height
          }
        }
      }
      imagesCollection{
        items{
          title
          description
          url
          width
          height
        }
      }
      isAutoPlay
      hasDots
      hasArrows
      carouselType
      slidesToShow
      speedAutoPlay
      imagesMobileCollection{
        items{
          title
          description
          url
          width
          height
        }
      }
      slidesToShowMobile
      ctaSectionCollection{
        items{
          name
          isHero
          title
          desc
          bullets
          textColor
          bgColor
          bgImage {
            title
            description
            url
          }
          mobileBgImage{
            title
            description
            url
          }
          image{
            title
            description
            url
          }
          rounded
          btnType
          btnMode
          btnText
          btnLink
          reverse
        }
      }
    }
    }`;

  const res = await fetch(`${apiUrl}?query=${query}`, {
    headers: headers,
    cache: "no-cache",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch carousel");
  }

  const { data } = await res.json();
  const carousel = {
    ...data.carousel,
    ctaSection: data.carousel?.ctaSectionCollection.items,
    images: data.carousel?.imagesCollection.items,
    imagesMobile: data.carousel?.imagesMobileCollection.items,
    slides: data.carousel?.slidesCollection.items,
  };
  delete carousel.ctaSectionCollection;
  delete carousel.imagesCollection;
  delete carousel.imagesMobileCollection;
  delete carousel.slidesCollection;
  return carousel;
};

//? returns one Carousel component by its Id
//* params: id of the component
const fetchCarouselSectionById = async (
  id: string
): Promise<CarouselSectionT> => {
  const query = `fragment ctaFields on CtaSection {
    name
    isHero
    title
    desc
    bullets
    textColor
    bgColor
    bgImage {
      title
      description
      url
    }
    mobileBgImage{
      title
      description
      url
    }
    image{
      title
      description
      url
    }
    rounded
    btnType
    btnMode
    btnText
    btnLink
    reverse
  }


query {
carouselSection(id:"${id}") {
  bgColor
  textColor
  sectionsCollection(limit:4){
    items{
         ...ctaFields
    }
  }
  iconsCollection{
    items{
      title
      description
      url
    }
  }
   menu 
}
}`;

  const res = await fetch(`${apiUrl}?query=${query}`, {
    headers: headers,
    cache: "no-cache",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch carouselSection");
  }
  const { data } = await res.json();
  const carouselSection = {
    ...data.carouselSection,
    sections: data.carouselSection?.sectionsCollection.items,
    icons: data.carouselSection?.iconsCollection.items,
  };
  delete carouselSection.sectionsCollection;
  delete carouselSection.iconsCollection;
  return carouselSection;
};

//? returns one Accordion Section component by its Id
//* params: id of the component
const fetchAccordionSectionById = async (
  id: string
): Promise<AccordionSectionT> => {
  const query = `fragment faqFields on Faq {
    title
    content {
      json
      links {
        assets {
          block {
            sys {
              id
            }
            title
            description
            url
            width
            height
          }
        }
      }
    }
  }

query {
accordionSection(id:"${id}") {
  title
  desc
  textColor
  bgColor
  textAccordionColor
  bgAccordionColor
  isClosed
  rtl
  isFaq
  itemsCollection(limit:4){
    items{
         ...faqFields
    }
  }
}
}`;

  const res = await fetch(`${apiUrl}?query=${query}`, {
    headers: headers,
    cache: "no-cache",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch accordionSection");
  }
  const { data } = await res.json();
  const accordionSection = {
    ...data.accordionSection,
    items: data.accordionSection?.itemsCollection.items,
  };
  delete accordionSection.itemsCollection;
  return accordionSection;
};

//? returns one Banner component by its Id
//* params: id and type of the component
const fetchBannerById = async (id: string): Promise<BannerT> => {
  const query = `

query {
banner(id:"${id}") {
  name
  title
  desc
  bgColor
  textColor
  image {
    title
    description
    url
  }
  btnType
  btnMode
  btnText
  btnLink
  reverse
}
}`;

  const res = await fetch(`${apiUrl}?query=${query}`, {
    headers: headers,
    cache: "no-cache",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch banner");
  }
  const { data } = await res.json();
  return data.banner;
};

//? returns one Column component by its ID
//* params: id of the component
const fetchColumnSectionById = async (id: string): Promise<ColumnSectionT> => {
  const query = `query {
    columnSection(id:"${id}"){
      name
      title
      desc
      textColor
      bgColor
      gridCols
  		gap
      columnsCollection{
        items{
          name
          title
          desc
          textColor
          bgColor
          image {
            title
            description
            url
          }
          video
          btnType
          btnMode
          btnText
          btnLink
          }
        }
      }
    }`;

  const res = await fetch(`${apiUrl}?query=${query}`, {
    headers: headers,
    cache: "no-cache",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch columnSection");
  }
  const { data } = await res.json();
  const columnSection = {
    ...data.columnSection,
    columns: data.columnSection?.columnsCollection.items,
  };
  delete columnSection.columnsCollection;
  return columnSection;
};
//? returns one List Section component by its ID
//* params: id of the component
const fetchListSectionById = async (id: string): Promise<ListSectionT> => {
  const query = `query {
    listSection(id:"${id}"){
      name
      title
      desc
      country {
        code
      }
      bgColor
      textColor
      listType
      productCategory
      faqsCollection {
        items {
          title
          slug
        }
      }  
      }
    }`;

  const res = await fetch(`${apiUrl}?query=${query}`, {
    headers: headers,
    cache: "no-cache",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch listSection");
  }
  const { data } = await res.json();
  console.log(data);
  //? fetch depending on the listType and productCategory
  if (data.listSection.listType === "city") {
    const cities = await fetchCities(
      data.listSection.country.code,
      data.listSection.productCategory
    );
    console.log(cities);
    const items: ListItemT = cities.map((city) => {
      return {
        text: city.name,
        image: city.image,
        link: `/${city.country.code}/conductor/ciudades/${city.slug}/`,
      };
    });
    data.listSection.items = items;
  }

  if (data.listSection.listType === "faq") {
    const items: ListItemT = data.listSection.faqsCollection.items.map(
      (faq: { title: string; slug: string }) => {
        return {
          text: faq.title,
          link: `/${data.listSection.country.code}/centro-de-ayuda/${faq.slug}/`,
        };
      }
    );
    data.listSection.items = items;
  }
  //? refactor to match the listSectionT
  const listProps: ListSectionT = {
    title: data.listSection.title,
    desc: data.listSection.desc,
    bgColor: data.listSection.bgColor,
    textColor: data.listSection.textColor,
    items: data.listSection.items,
  };
  return listProps;
};
//? returns one Guide component by its SLUG and COUNTRYCODE
//* params: slug and countrycode
const fetchGuideBySlug = async (
  countryCode: CountryCode,
  slug: string
): Promise<GuideT> => {
  const query = `query {
    guideCollection (where: {country: {code:"${countryCode}"}, slug:"${slug}"} limit:1) {
      items {
        slug
          title
              excerpt
              category
              country {
                code
              }
              seoTitle
              seoDescription
              btnCustomText
              btnCustomLink
              featuredImage {
                title
                description
                url
              }
              featuredImageMobile {
                title
                description
                url
              }
              content {
                json
                links {
                          assets {
                    block {
                      sys {
                        id
                      }
                      title
                      description
                      url
                      width
                      height
                    }
                  }
                }
              } 
      }
    }
    }`;

  const res = await fetch(`${apiUrl}?query=${query}`, {
    headers: headers,
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch Guide");
  }
  const { data } = await res.json();

  const guide = data.guideCollection.items[0];

  return guide;
};
//? returns one Guide component by its SLUG and COUNTRYCODE
//* params: slug and countrycode
const fetchGuidesByCategory = async (
  category: string,
  countryCode: CountryCode
): Promise<
  {
    title: string;
    excerpt: string;
    featuredImage: ImageType;
    slug: string;
    countryCode: CountryCode;
  }[]
> => {
  const query = `query {
    guideCollection (where: {country: {code:"${countryCode}"}, category_contains_all:"${category}"} limit:10) {
      items {
        slug
        title
        excerpt
        country {
          code
        }
        featuredImage {
            title
            description
            url
        }
      }
    }
    }`;

  const res = await fetch(`${apiUrl}?query=${query}`, {
    headers: headers,
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch Guides by Category");
  }
  const { data } = await res.json();

  const guides = data.guideCollection.items;

  return guides;
};

//* params: country code from the country to fetch the cities
const fetchArticleBySlug = async (
  slug: string,
  countryCode: CountryCode
): Promise<ArticleT> => {
  const query = `query {
    articleCollection(where: {country:{code: "${countryCode}"}, slug: "${slug}"}, limit: 1){
      items{
        title
        slug
        seoTitle
        seoDescription
        country {
          code
        }
        excerpt
        featuredImage {
          title
          description
          url
        }
        content {
          json
          links {
          assets {
              block {
                sys {
                  id
                }
                title
                description
                url
                width
                height
              }
            }
          }
        }
      }
    }
    }`;

  const res = await fetch(`${apiUrl}?query=${query}`, {
    headers: headers,
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch article by slug");
  }
  const articles = await res.json();

  return articles.data.articleCollection.items?.[0];
};

const fetchArticles = async (
  countryCode: CountryCode,
  category: string
): Promise<ArticleT[]> => {
  const query = `
  query {
    articleCollection(where: {country:{code: "${countryCode}"}, category_contains_all: "${category}"}){
      items{
        title
        slug
        seoTitle
        seoDescription
        country {
          code
        }
        excerpt
        featuredImage {
          title
          description
          url
        }
      }
    }
  }
`;

  const res = await fetch(`${apiUrl}?query=${query}`, {
    headers: headers,
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch articles");
  }

  const articles = await res.json();

  return articles.data.articleCollection.items;
};

//? returns one FAQ component by its slug and country
//* params: id of the component
const fetchFAQBySlug = async (
  countryCode: CountryCode,
  slug: string
): Promise<FAQT> => {
  const query = `query {
    faqCollection (where: {country: {code:"${countryCode}"}, slug:"${slug}"} limit: 1) {
      items {
        title
        slug
        type
        country {
          code
        }
        content {
          json
          links {
            assets {
              block {
                sys {
                  id
                }
                title
                description
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }`;

  const res = await fetch(`${apiUrl}?query=${query}`, {
    headers: headers,
    cache: "no-cache",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch listSection");
  }
  const { data } = await res.json();
  const faq = data.faqCollection.items[0];

  return faq;
};
//? returns one FAQ component by its slug and country
//* params: id of the component
const fetchLegalBySlug = async (
  countryCode: CountryCode,
  slug: string
): Promise<FAQT> => {
  const query = `query {
    legalCollection (where: {country: {code:"${countryCode}"}, slug:"${slug}"} limit: 1) {
      items {
        name
        content {
          json
          links {
            assets {
              block {
                sys {
                  id
                }
                title
                description
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }`;

  const res = await fetch(`${apiUrl}?query=${query}`, {
    headers: headers,
    cache: "no-cache",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch Legal");
  }
  const { data } = await res.json();
  const legal = data.legalCollection.items[0];
  console.log(data);
  return legal;
};

//? returns a object of images
//* params: array of image names to fetch
const fetchImages = async (imagesList: string[]): Promise<ImageType[]> => {
  const condition = imagesList.map((image) => {
    return { title: image };
  });

  const gqlFilter = condition
    .map((filterObj) => {
      return `{ ${Object.entries(filterObj)
        .map(([key, value]) => `${key}: "${value}"`)
        .join(",")} }`;
    })
    .join(",");

  const query = `query {
  assetCollection(where: {
    OR:[
      ${gqlFilter}
    ]
  }) {
    items {
      title
      url
      description
    }
  }
}`;
  const res = await fetch(`${apiUrl}?query=${query}`, {
    headers: headers,
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch images");
  }
  const images = await res.json();

  return images.data.assetCollection.items;
};

export {
  fetchCities,
  fetchCountries,
  fetchPageComponents,
  fetchCTASectionById,
  fetchColumnSectionById,
  fetchColumnImageSectionById,
  fetchCarouselSectionById,
  fetchAccordionSectionById,
  fetchBannerById,
  fetchOptionsSectionById,
  fetchImages,
  fetchCarouselById,
  fetchListSectionById,
  fetchFAQBySlug,
  fetchGuideBySlug,
  fetchGuidesByCategory,
  fetchCitieBySlug,
  fetchArticleBySlug,
  fetchArticles,
  fetchLegalBySlug,
};
