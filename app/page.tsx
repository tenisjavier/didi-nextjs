import Image from "next/image";
import { fetchCities, fetchImages } from "@/utils/db";
import ListSection from "@/components/ListSection";
export default async function Home() {
  const cities = await fetchCities("cl");
  const city = cities[0];

  const images = await fetchImages([
    "co.DiDiRepartidores-bgImage.image",
    "pe.DiDiFood-bgImage.image",
  ]);
  const items = cities.map((city) => {
    return {
      text: city.name,
      secondText: "",
      link: city.image.url,
      image: city.image,
    };
  });
  const props = {
    title: "Ciudades",
    desc: "Ciudades donde DiDi está presente",
    bgColor: "bg-orange-primary",
    textColor: "text-white",
    items: items,
  };

  return (
    <>
      {<ListSection {...props}></ListSection>}

      <h1 className="text-3xl text-red-500 font-bold">home</h1>
      {images.map((image, index) => (
        <Image
          alt={image.description}
          key={index}
          src={image.url}
          fill
          placeholder="blur"
        />
      ))}
    </>
  );
}
