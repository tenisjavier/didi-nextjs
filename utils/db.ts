//? Contentful fetches per content type, country and category
import {
  City,
  Country,
  CountryCode,
  FeaturesT,
  PageT,
  ItemType,
  PartnerT,
  RequirementT,
  LegalT,
  FAQType,
} from "@/typings";
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
  ABtestT,
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
  const filterParams =
    productCategory === "airport"
      ? "hasAirport: true"
      : `product:{category_contains_some:"${productCategory}"}`;

  const query = `query {
    cityCollection(order: [name_ASC],where: {${filterParams}, country:{code:"${countryCode}"}}){
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
    method: "POST",
    headers: headers,
    body: JSON.stringify({ query }),
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
  slug: string,
  productCategory?: string
): Promise<City> => {
  const imageFieldQuery = productCategory === "airport" ? "imageMap" : `image`;

  const query = `query {
    cityCollection(order: [name_ASC],where: {country:{code: "${countryCode}"}, slug: "${slug}" }){
      items{
        name
        slug
        productCollection {
          items {
            sys {
              id
            }
          }
        }
        country {
          code
          name
        }
        ${imageFieldQuery} {
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

  const citiesData = {
    ...cities.data.cityCollection.items?.[0],
    productsId:
      cities.data.cityCollection.items?.[0].productCollection.items.map(
        (item: any) => item.sys.id
      ),
  };

  return citiesData;
};

//? returns a array of products
//* params: productsId to fetch the products
const fetchProductsByIds = async (productsId: string[]): Promise<any> => {
  const query = `query ($ids: [String!]!) {
    productCollection(where: { sys: { id_in: $ids } }) {
      items {
        name
        description
        image {
          title
          description
          url
        }
      }
    }
  }`;

  const variables = {
    ids: productsId,
  };

  const res = await fetch(`${apiUrl}?query=${query}`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ query, variables }),
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch Products");
  }
  const products = await res.json();
  return products.data.productCollection.items;
};

//? returns a array of products
//* params: products to fetch the products
const fetchProducts = async (
  countryCode: CountryCode,
  params?: {
    categories?: string[];
    name?: string;
  }
): Promise<any> => {
  const query = `query ($categories: [String], $name: String){
    productCollection(where: {category_contains_all: $categories, country: {code: "${countryCode}"}, name: $name }) {
      items {
        name
        description
        faqCollection{
          items{
            title
            slug
          }
        }
      }
    }
  }`;

  const variables = {
    categories: params?.categories,
    name: params?.name,
  };

  const res = await fetch(`${apiUrl}?query=${query}`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ query, variables }),
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch Products");
  }
  const products = await res.json();
  return products.data.productCollection.items;
};

//? returns a array of requirements
//* params: country code from the country to fetch the cities
const fetchRequirementsByCitySlug = async (
  slug: string
): Promise<RequirementT[]> => {
  const query = `query {
    requirementCollection(where: {city: {slug: "${slug}"}}) {
      items{
        name
        requirement{
          json
        }
      }
    }
  }`;

  const res = await fetch(`${apiUrl}?query=${query}`, {
    headers: headers,
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch Requirements");
  }
  const requirements = await res.json();
  return requirements.data.requirementCollection.items;
};

//? returns a object of cities
//* params: country code from the country to fetch the cities
const fetchCountries = async (): Promise<Country[]> => {
  const query = `query {
    countryCollection(order: name_ASC) {
      items{
        name
        code
        languageCode
        arabicName
        englishName
        spanishName
        chineseName
        hostname
        path
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

//? returns a object of pages and there ids
//* params: the slug of the ABtest ex: "/mx/food/"
const fetchABtest = async (pathname: string): Promise<ABtestT> => {
  const query = `
  query {
    abtestCollection(where: { pathname: "${pathname}"}) {
      items{
        name
        pathname
        pagesCollection{
          items{
            name
            pathname
            sys{
              id
            }
          }
        }
      }
    }
  }`;

  const res = await fetch(`${apiUrl}?query=${query}`, {
    headers: headers,
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch abtest ");
  }
  const abtest = await res.json();
  return abtest?.data.abtestCollection?.items?.[0];
};

const fetchPages = async (): Promise<PageT[]> => {
  const query = `
  query {
    pageCollection(limit: 1000){
      items {
        pathname
        country{
          code
        }
        sys{
          publishedAt
        }
      }
    }
  }`;

  const res = await fetch(`${apiUrl}?query=${query}`, {
    headers: headers,
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch page components");
  }
  const pageComponents = await res.json();
  return pageComponents.data.pageCollection.items;
};

//? returns a object of components of a page
//* params: the pathname of the page ex: "/mx/food/"
const fetchPageComponents = async (
  pathname: string
): Promise<PageComponent[]> => {
  const query = `
  fragment richTextFields on ContentTypeRichText {
    __typename
    sys {
      id
    }
  }

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

  fragment legalFields on Legal {
    __typename
    sys {
      id
    }
  }

  query {
    pageCollection(where: {pathname :"${pathname}"}) {
      items {
        componentsCollection(limit:15) {
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
            ...legalFields
            ...richTextFields
          }
        }
      }
    }
  }`;

  const res = await fetch(`${apiUrl}?query=${query}`, {
    headers: headers,
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch page components");
  }
  const pageComponents = await res.json();

  const componentsToFetch =
    pageComponents.data.pageCollection.items[0].componentsCollection.items.map(
      (item: { sys: { id: string }; __typename: string; name: string }) => {
        return {
          id: item.sys?.id,
          __typename: item.__typename,
          name: item.name,
        };
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
      brightness
      type
      bulletsConfigColumn
      whiteRight
      borderColor
      btnPhoneNumber
      btnWhatsAppNumber   
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
      imageAlignment
      columnsCollection{

        items{
          name
          title
          desc
          textColor
          bgColor
          isImageIcon
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
      type
      maxWidth
      title
      desc
      arrowColor
      cardsCollection{
        items{
          type
          name
          title
          pathname
          desc
          subDesc
          textColor
          bgColor
          image {
            title
            description
            url
          }
          isImageIcon
          video
          btnType
          btnMode
          btnText
          btnLink
        }
      }
      slidesCollection{
        items{
          title
          desc
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
          brightness
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
    cards: data.carousel?.cardsCollection.items,
  };
  delete carousel.ctaSectionCollection;
  delete carousel.imagesCollection;
  delete carousel.imagesMobileCollection;
  delete carousel.slidesCollection;
  delete carousel.cardsCollection;
  return carousel;
};

//? returns one Carousel component by its Id
//* params: id of the component
const fetchCarouselSectionById = async (
  id: string
): Promise<CarouselSectionT> => {
  const query = `
  fragment ctaFields on CtaSection {
    name
    isHero
    title
    desc
    bullets
    textColor
    bgColor
    brightness
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
  id: string,
  params?: {
    faqRelatedCity?: string;
  }
): Promise<AccordionSectionT> => {
  const itemsCollection: FAQT[] = [];

  let accordionSection: Partial<AccordionSectionT> = {};

  const handleFetch = async (skip: number, limit: number) => {
    const query = `
    fragment faqFields on Faq {
      title
      slug
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
  
    fragment productFields on Product {
      name
      slug
      requirement {
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

    fragment documentFields on Document {
      title
      slug
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
        name
        title
        country{
          code
        }
        desc
        textColor
        bgColor
        textAccordionColor
        bgAccordionColor
        isClosed
        rtl
        isFaq
        accordionType
        faqType
        itemsCollection(limit:${limit || 0}, skip: ${skip || 0}){
          total
          skip
          limit
          items{
            __typename
               ...faqFields
               ...productFields
               ...documentFields
          }
        }
      }
      }`;

    const res = await fetch(`${apiUrl}?query=${query}`, {
      headers: headers,
    });

    const { data } = await res.json();

    const total = data?.accordionSection?.itemsCollection?.total;
    const totalPages = Math.ceil(total / limit);
    const items = data?.accordionSection?.itemsCollection;
    const skipPage = data?.accordionSection?.itemsCollection?.skip;

    itemsCollection?.push(...items.items);

    accordionSection = {
      ...data.accordionSection,
    };

    if (totalPages > 1 && skipPage < total) {
      handleFetch(skipPage + limit, limit);
    }
  };

  await handleFetch(0, 10);

  if (itemsCollection?.[0]?.__typename === "Product") {
    itemsCollection.map((item: any) => {
      if (item.name) {
        item.title = item.name;
        delete item.name;
      }

      if (item.requirement) {
        item.content = item.requirement;
        delete item.requirement;
      }

      return {
        title: item.title,
        content: item.content,
      };
    });
  }

  if (accordionSection?.accordionType === "faqs") {
    const faqs = await fetchFAQS(accordionSection?.country?.code, {
      types: accordionSection?.faqType || [],
      relatedCity: params?.faqRelatedCity,
    });

    //@ts-ignore
    accordionSection.items = faqs.map((faq) => {
      return {
        title: faq.title,
        content: faq.content,
      };
    });
  } else {
    //@ts-ignore
    accordionSection.items = itemsCollection;
  }

  //@ts-ignore
  delete accordionSection.itemsCollection;

  return accordionSection as AccordionSectionT;
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
  borderColor
  image {
    title
    description
    url
    width
    height
  }
  imageBottom
  btnType
  btnMode
  btnText
  btnLink
  reverse
  video
}
}`;

  const res = await fetch(`${apiUrl}?query=${query}`, {
    headers: headers,
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
const fetchColumnSectionById = async (
  id: string,
  pagination: { page: number; limit: number }
): Promise<ColumnSectionT> => {
  const query = `
  fragment partnerFields on Partner {
    __typename
    name
    desc
    slug
    category
    logo {
      title
      description
      url
      width
      height
    }
  }

  query {
    columnSection(id:"${id}"){
      name
      title
      desc
      textColor
      bgColor
      gridCols
  		gap
      itemType
      guideCategory
      articleCategory
      isSuggestedSection
      order
      limitItemsPerPage
      country {
        code
      }
      itemsCollection{
        items{
          ...partnerFields
        }
      }
      columnsCollection{
        items{
          name
          title
          pathname
          desc
          textColor
          bgColor
          type
          image {
            title
            description
            url
          }
          isImageIcon
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
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch columnSection");
  }
  const { data } = await res.json();
  const columnSection = {
    ...data.columnSection,
    columns: data?.columnSection?.columnsCollection?.items,
    items: [],
  };

  const countryCode = columnSection?.country?.code;

  if (columnSection?.itemType?.toLowerCase() === "partner") {
    const partnersItems = data?.columnSection?.itemsCollection?.items?.filter(
      (partner: any) => partner.__typename === "Partner"
    );

    if (partnersItems && partnersItems?.length > 0) {
      partnersItems.forEach((item: any) => {
        const links = {
          didimas: `/${countryCode}/didimas/${item.slug}`,
          didifleet: `/${countryCode}/didifleet/${item.slug}`,
          creditCard: `/${countryCode}/tarjeta-de-credito/beneficios/${item.slug}`,
        };

        const category = item.category.find(
          (item: "didimas" | "didifleet" | "creditCard") => links[item]
        ) as "didimas" | "didifleet" | "creditCard";

        item.title = item.name;
        item.pathname = links[category];
        item.image = item.logo;
        item.isImageIcon = true;

        delete item.name;
        delete item.slug;
        delete item.logo;
      });
      columnSection.items.push(...(partnersItems || []));
    }
  }

  if (columnSection?.itemType?.toLowerCase() === "guide") {
    const countryCode = columnSection?.country?.code;

    if (countryCode && columnSection?.guideCategory?.[0]) {
      const guides = await fetchGuides(
        columnSection?.country?.code,
        columnSection?.guideCategory?.[0],
        pagination.page,
        pagination.limit
      );
      const items: ListItemT = guides?.items?.map((guide) => {
        const link = `/${countryCode}/guias/${guide.slug}/`;

        const typeOflink = {
          restaurant: `/${countryCode}/food/restaurantes/guias/${guide.slug}/`,
          delivery: `/${countryCode}/food/repartidores/guias/${guide.slug}/`,
        } as any;

        return {
          title: guide.title,
          desc: guide.excerpt,
          image: guide.featuredImage,
          pathname: typeOflink[columnSection.guideCategory] || link,
          btnLink: typeOflink[columnSection.guideCategory] || link,
          btnType: "custom",
          btnText: "Leer Artículo",
          btnMode: "dark",
          bgColor: "bg-white",
          textColor: "gray-primary",
        };
      });
      columnSection.items = items;
      columnSection.pagination = {
        total: columnSection.isSuggestedSection ? 12 : guides?.total,
        limit: pagination.limit,
        page: pagination.page,
      };
    }
  }

  if (columnSection?.itemType?.toLowerCase() === "article") {
    if (columnSection?.country?.code && columnSection?.articleCategory?.[0]) {
      const articles = await fetchArticles(
        columnSection?.country?.code,
        columnSection?.articleCategory?.[0],
        pagination.page,
        pagination.limit
      );

      const items: ListItemT = articles?.items?.map((article: any) => {
        const countryCode = columnSection.country.code;

        const link = `/${countryCode}/articulos/${article.slug}/`;

        const typeOflink = {
          news: `/${countryCode}/newsroom/${article.slug}/`,
          food: `/${countryCode}/food/blog/${article.slug}/`,
          pay: `/${countryCode}/didipay/blog/${article.slug}/`,
        } as any;

        return {
          title: article.title,
          desc: article.excerpt,
          image: article.featuredImage,
          pathname: typeOflink[columnSection.articleCategory] || link,
          btnLink: typeOflink[columnSection.articleCategory] || link,
          btnType: "custom",
          btnText: "Leer Artículo",
          btnMode: "dark",
          bgColor: "bg-white",
          textColor: "gray-primary",
        };
      });
      columnSection.items = items;
      columnSection.pagination = {
        total: columnSection.isSuggestedSection ? 12 : articles?.total,
        limit: pagination.limit,
        page: pagination.page,
      };
    }
  }

  delete columnSection.columnsCollection;
  delete columnSection.itemsCollection;

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
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch listSection");
  }
  const { data } = await res.json();

  //? fetch depending on the listType and productCategory
  if (data.listSection.listType === "city") {
    const cities = await fetchCities(
      data.listSection.country.code,
      data.listSection.productCategory
    );

    const items: ListItemT = cities.map((city) => {
      let link = `/${city.country.code}/conductor/ciudades/${city.slug}/`;

      if (
        data.listSection.country.code === "nz" ||
        data.listSection.country.code === "au" ||
        data.listSection.country.code === "eg"
      ) {
        link = `/${city.country.code}/driver/cities/${city.slug}/`;
      }

      if (data.listSection.productCategory?.includes("food")) {
        link = `/${city.country.code}/food/ciudad/${city.slug}/`;
      }

      if (data?.listSection.productCategory?.includes("airport")) {
        link = `/${city.country.code}/aeropuerto/${city.slug}/`;
      }

      return {
        text: city.name,
        image: city.image,
        link,
      };
    });
    data.listSection.items = items;
  }

  if (data.listSection.listType === "faq") {
    let faqDirectory: string;

    switch (data.listSection.productCategory) {
      case "foodDelivery":
        faqDirectory = "/food/repartidores/preguntas-frecuentes/";
        break;
      case "foodBusiness":
        faqDirectory = "/food/restaurantes/preguntas-frecuentes/";
        break;
      case "card":
        faqDirectory = "/tarjeta-de-credito/preguntas-frecuentes/";
        break;
      case "loan":
        faqDirectory = "/prestamos/preguntas-frecuentes/";
        break;
      case "pay":
        faqDirectory = "/didipay/preguntas-frecuentes/";
        break;
      default:
        faqDirectory =
          data.listSection.country.code === "nz" ||
          data.listSection.country.code === "au" ||
          data.listSection.country.code === "eg"
            ? "/help-center/"
            : "/centro-de-ayuda/";
    }
    const items: ListItemT = data.listSection.faqsCollection.items.map(
      (faq: { title: string; slug: string }) => {
        let link = `/${data.listSection.country.code}${faqDirectory}${faq.slug}/`;

        return {
          text: faq.title,
          link,
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
      total
      limit
      skip
      items {
        slug
          title
              excerpt
              category
              country {
                code
                name
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
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch Guide");
  }
  const { data } = await res.json();

  const guide = data.guideCollection;

  return guide;
};

//* params: country code from the country to fetch the cities
const fetchArticleBySlug = async (
  slug: string,
  countryCode: CountryCode
): Promise<ArticleT> => {
  const query = `query {
    articleCollection(where: {country:{code: "${countryCode}"}, slug: "${slug}"}, limit: 1){
      total
      limit
      skip
      items{
        title
        slug
        seoTitle
        category
        seoDescription
        country {
          code
          name
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
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch article by slug");
  }
  const articles = await res.json();

  return articles.data.articleCollection;
};

//? returns Articles by Category and Country with Page and Limit
//* params: countryCode, category of the article, page and limit.
const fetchArticles = async (
  countryCode: CountryCode,
  category: string,
  page: number,
  limit: number
  //order?: stri g
): Promise<ArticleT> => {
  const skip = (page - 1) * limit;
  const query = `
  query {
    articleCollection(where: {country:{code: "${countryCode}"}, category_contains_all: "${category}"}, 
    limit: ${limit}, 
    skip: ${skip}
    ){
      total
      limit
      skip
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
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch articles");
  }

  const articles = await res.json();

  return articles.data.articleCollection;
};

//? returns Guide by Category and Country with Page and Limit
//* params: countryCode, category of the article, page and limit.
const fetchGuides = async (
  countryCode: CountryCode,
  category: string,
  page: number,
  limit: number
  //order?: stri g
): Promise<GuideT> => {
  const skip = (page - 1) * limit;
  const query = `
  query {
    guideCollection(where: {country:{code: "${countryCode}"}, category_contains_all: "${category}"}, 
    limit: ${limit}, 
    skip: ${skip}
    ){
      total
      limit
      skip
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
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch guides");
  }

  const guides = await res.json();
  return guides.data.guideCollection;
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
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch Faq");
  }
  const { data } = await res.json();
  const faq = data.faqCollection.items[0];

  return faq;
};

const fetchFAQS = async (
  countryCode: CountryCode,
  params?: {
    types?: FAQType;
    relatedCity?: string;
  }
): Promise<FAQT[]> => {
  const query = `query MyQuery($relatedCity: String, $type_contains_some: [String]) {
      faqCollection(where: { type_contains_some: $type_contains_some, relatedCity: $relatedCity, country: { code: "${countryCode}" } }, limit: 10) {
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

  const variables = {
    type_contains_some: params?.types,
    relatedCity: params?.relatedCity,
  };

  const res = await fetch(apiUrl, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ query, variables }),
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch FAQS");
  }
  const { data } = await res.json();
  const faq = data.faqCollection.items;

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
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch Legal");
  }
  const { data } = await res.json();
  const legal = data.legalCollection.items[0];
  return legal;
};

//? returns one FAQ component by its slug and country
//* params: id of the component
const fetchLegals = async (countryCode: CountryCode): Promise<FAQT> => {
  const query = `query {
    legalCollection (where: {country: {code:"${countryCode}"}}) {
      total
      items {
        name
        slug
      }
    }
  }`;

  const res = await fetch(`${apiUrl}?query=${query}`, {
    headers: headers,
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch Legal");
  }
  const { data } = await res.json();
  const legal = data.legalCollection;
  return legal;
};

const fetchLegalById = async (id: string): Promise<LegalT> => {
  const query = `query {
    legalCollection (where: {sys: {id:"${id}"}} limit: 1) {
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
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch Legal");
  }
  const { data } = await res.json();
  const legal = data?.legalCollection?.items?.[0];
  return legal;
};

const fetchPartnersByCategory = async (
  countryCode: CountryCode,
  category: string
): Promise<PartnerT[]> => {
  const query = `query {
    partnerCollection (where: {country: {code:"${countryCode}"}, category_contains_all:"${category}"}) {
      items {
        name
        slug
        logo{
          url
          width
          height
          description
        }
        desc
      }
    }
  }`;

  const res = await fetch(`${apiUrl}?query=${query}`, {
    headers: headers,
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch Partner");
  }
  const { data } = await res.json();
  const partners = data.partnerCollection.items;
  return partners;
};

const fetchPartnerBySlug = async (
  countryCode: CountryCode,
  slug: string
): Promise<PartnerT> => {
  const query = `query {
    partnerCollection (where: {country: {code:"${countryCode}"}, slug:"${slug}"} limit: 1) {
      items {
        name
        slug
        logo{
          url
          width
          height
          description
        }
        desc
        country{
          code
          name
        }
        promoLink
        promoLinkText
        heroTitle
        heroDesc
        heroImage{
          url
          width
          height
          description
        }
        featureTitle
        featureDesc
        featureImage{
          url
          width
          height
          description
        }
        category
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
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch Partner");
  }
  const { data } = await res.json();
  const partner = data.partnerCollection.items[0];
  return partner;
};

const fetchFeatureBySlug = async (
  countryCode: CountryCode,
  slug: string
): Promise<FeaturesT> => {
  const query = `query {
    featureCollection (where: {country: {code:"${countryCode}"}, slug:"${slug}"} limit: 1) {
      items {
        name
        slug
        image{
          url
          width
          height
          description
        }
        description
        components
        componentImagesCollection{
          items{
            url
            width
            height
            description
          }
        }
        country{
          code
          name
        }
        category
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
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch Feature");
  }

  const { data } = await res.json();
  const feature: FeaturesT = data.featureCollection.items[0];

  if (feature?.components?.meta) {
    for (let i = 0; i < feature?.components?.meta?.length; i++) {
      feature.components.meta[i].image =
        feature.componentImagesCollection.items[i];
      delete feature.componentImagesCollection;
    }
  }

  return feature;
};

const fetchFeatureByCategory = async (
  countryCode: CountryCode,
  category: string
): Promise<FeaturesT[]> => {
  const query = `query {
    featureCollection (where: {country: {code:"${countryCode}"}, category_contains_all:"${category}"}) {
      items {
        name
        slug
      }
    }
  }`;

  const res = await fetch(`${apiUrl}?query=${query}`, {
    headers: headers,
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch Feature");
  }

  const { data } = await res.json();
  const feature = data.featureCollection.items;

  return feature;
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

const fetchSuggestedColumnSection = async (
  countryCode: CountryCode,
  itemType: ItemType,
  category: string
) => {
  const categoryAttribute =
    itemType === "Article" ? "articleCategory" : "guideCategory";

  const query = `query {
    columnSectionCollection(where: { country: {code: "${countryCode}"}, itemType: "${itemType}", ${categoryAttribute}_contains_all: "${category}"}) {
     items {
       sys {
         id
       }
     }
   }
 }`;

  const res = await fetch(`${apiUrl}?query=${query}`, {
    headers: headers,
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch Feature");
  }

  const { data } = await res.json();
  const { id } = data.columnSectionCollection.items[0].sys;

  const columnSection = await fetchColumnSectionById(id, {
    page: 0,
    limit: 12,
  });

  delete columnSection.pagination;

  return columnSection;
};

export {
  fetchCities,
  fetchCountries,
  fetchABtest,
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
  fetchCitieBySlug,
  fetchArticleBySlug,
  fetchArticles,
  fetchGuides,
  fetchLegalBySlug,
  fetchLegalById,
  fetchPartnerBySlug,
  fetchPartnersByCategory,
  fetchFeatureBySlug,
  fetchFeatureByCategory,
  fetchPages,
  fetchSuggestedColumnSection,
  fetchFAQS,
  fetchLegals,
  fetchProductsByIds,
  fetchRequirementsByCitySlug,
  fetchProducts,
};
