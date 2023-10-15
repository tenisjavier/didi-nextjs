//? Contentful fetches per content type, country and category
import { CountryCode } from "@/typings";
import { City } from "@/typings";
import { ImageType } from "@/typings";

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

export { fetchCities, fetchImages };
