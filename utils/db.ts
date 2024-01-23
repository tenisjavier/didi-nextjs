//? Contentful fetches per content type, country and category
import {
  City,
  Country,
  CountryCode,
  FeaturesT,
  PartnerT,
  ProductT,
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
  const itemsCollection: FAQT[] = [];

  let accordionSection: Partial<AccordionSectionT> = {};

  const handleFetch = async (skip: number, limit: number) => {
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
  
    fragment productFields on Product {
      name
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
  
    query {
      accordionSection(id:"${id}") {
        name
        title
        desc
        textColor
        bgColor
        textAccordionColor
        bgAccordionColor
        isClosed
        rtl
        isFaq
        itemsCollection(limit:${limit || 0}, skip: ${skip || 0}){
          total
          skip
          limit
          items{
            __typename
               ...faqFields
               ...productFields
          }
        }
      }
      }`;

    const res = await fetch(`${apiUrl}?query=${query}`, {
      headers: headers,
      cache: "no-cache",
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

  //@ts-ignore
  accordionSection.items = itemsCollection;
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
  const query = `
  fragment partnerFields on Partner {
    __typename
    name
    desc
    slug
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
    cache: "no-cache",
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
    // items: data?.columnSection?.itemsCollection?.items,
  };

  if (columnSection?.itemType?.toLowerCase() === "partner") {
    const partnersItems = data?.columnSection?.itemsCollection?.items?.filter(
      (partner: any) => partner.__typename === "Partner"
    );

    if (partnersItems && partnersItems?.length > 0) {
      partnersItems.forEach((item: any) => {
        item.title = item.name;
        item.pathname = item.slug;
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
    if (columnSection?.country?.code && columnSection?.guideCategory?.[0]) {
      const guides = await fetchGuidesByCategory(
        columnSection?.guideCategory?.[0],
        columnSection?.country?.code,
        { limit: columnSection?.limitItemsPerPage },
        columnSection?.order
      );

      const items: ListItemT = guides?.items?.map((guide) => {
        return {
          title: guide.title,
          desc: guide.excerpt,
          image: guide.featuredImage,
          pathname: guide.slug,
          btnLink: guide.slug,
          btnType: "custom",
          btnText: "Leer Artículo",
          btnMode: "dark",
          bgColor: "bg-white",
          textColor: "gray-primary",
        };
      });
      columnSection.items = items;
      columnSection.pagination = {
        total: guides?.total,
        limit: guides?.limit,
        skip: guides?.skip,
      };
    }
  }

  if (columnSection?.itemType?.toLowerCase() === "article") {
    if (columnSection?.country?.code && columnSection?.articleCategory?.[0]) {
      const articles = await fetchArticleByCategory(
        columnSection?.country?.code,
        columnSection?.articleCategory?.[0],
        { limit: columnSection?.limitItemsPerPage },
        columnSection?.order
      );

      const items: ListItemT = articles?.items?.map((article: any) => {
        return {
          title: article.title,
          desc: article.excerpt,
          image: article.featuredImage,
          pathname: article.slug,
          btnLink: article.slug,
          btnType: "custom",
          btnText: "Leer Artículo",
          btnMode: "dark",
          bgColor: "bg-white",
          textColor: "gray-primary",
        };
      });
      columnSection.items = items;
      columnSection.pagination = {
        total: articles?.total,
        limit: articles?.limit,
        skip: articles?.skip,
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
    cache: "no-cache",
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
      console.log(city);
      if (
        data.listSection.country.code === "nz" ||
        data.listSection.country.code === "au" ||
        data.listSection.country.code === "eg"
      ) {
        link = `/${city.country.code}/driver/cities/${city.slug}/`;
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
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch Guide");
  }
  const { data } = await res.json();

  const guide = data.guideCollection;

  return guide;
};
//? returns one Guide component by its SLUG and COUNTRYCODE
//* params: slug and countrycode
const fetchGuidesByCategory = async (
  category: string,
  countryCode: CountryCode,
  pagination?: {
    skip?: number;
    limit?: number;
  },
  order?: string
): Promise<GuideT> => {
  const query = `query {
    guideCollection (
      where: {
        country: {code:"${countryCode}"}, 
        category_contains_all:"${category}"
      },
      limit: ${pagination?.limit || 12}, 
      skip: ${pagination?.skip || 0},
      ${order ? "order: sys_" + order : ""}
      ) {
      total
      limit
      skip
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

  const guides = data.guideCollection;

  return guides;
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
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch article by slug");
  }
  const articles = await res.json();

  return articles.data.articleCollection;
};

const fetchArticleByCategory = async (
  countryCode: CountryCode,
  category: string,
  pagination?: {
    skip?: number;
    limit?: number;
  },
  order?: string
): Promise<ArticleT> => {
  const query = `query {
    articleCollection(
      where: {
        country:{code: "${countryCode}"}, 
        category_contains_all: "${category}"
      }, 
      limit: ${pagination?.limit || 12}, 
      skip: ${pagination?.skip || 0},
      ${order ? "order: sys_" + order : ""}
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
    }`;

  const res = await fetch(`${apiUrl}?query=${query}`, {
    headers: headers,
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch article by category");
  }
  const articles = await res.json();

  return articles.data.articleCollection;
};

const fetchArticles = async (
  countryCode: CountryCode,
  category: string,
  pagination?: {
    limit?: number;
    skip?: number;
  }
): Promise<ArticleT> => {
  const query = `
  query {
    articleCollection(where: {country:{code: "${countryCode}"}, category_contains_all: "${category}"}, 
    limit: ${pagination?.limit || 12}, 
    skip: ${pagination?.skip || 0}
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
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch articles");
  }

  const articles = await res.json();

  return articles.data.articleCollection;
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
    cache: "no-cache",
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
    cache: "no-cache",
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
    cache: "no-cache",
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
    cache: "no-cache",
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
  fetchPartnerBySlug,
  fetchPartnersByCategory,
  fetchFeatureBySlug,
  fetchFeatureByCategory,
  fetchArticleByCategory,
};
