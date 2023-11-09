//? Contentful fetches per content type, country and category
import { CountryCode } from "@/typings";
import { City } from "@/typings";
import { ImageType } from "@/typings";
import { PageComponent } from "@/typings";
import {
  CTASectionT,
  ColumnSectionT,
  CarouselSectionT,
  AccordionSectionT,
  BannerT,
} from "@/typings";

//? Contentful API URL and Token from .env.local
const apiUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`;
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
};

//? returns a object of cities
//* params: country code from the country to fetch the cities
const fetchCities = async (countryCode: CountryCode): Promise<City[]> => {
  const query = `query {
    cityCollection(where: {country:{code:"${countryCode}"}}){
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
  fragment carouselFields on CarouselSection {
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
  query {
    pageCollection(limit:2) {
      items {
        componentsCollection(limit:10) {
          items {
           ...ctaFields
            ...columnFields
            ...carouselFields
            ...accordionFields
            ...bannerFields
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
        return { id: item.sys.id, __typename: item.__typename };
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
//* params: id and type of the component
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

//? returns one Carousel component by its Id
//* params: id and type of the component
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
//* params: id and type of the component
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
  console.log(data);
  return data.banner;
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
  fetchPageComponents,
  fetchCTASectionById,
  fetchColumnSectionById,
  fetchCarouselSectionById,
  fetchAccordionSectionById,
  fetchBannerById,
  fetchImages,
};
