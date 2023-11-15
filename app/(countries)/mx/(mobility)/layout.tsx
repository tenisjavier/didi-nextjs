import Header from "@/components/Header/index";
import Footer from "@/components/Footer/index";

export default async function MXLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header countryCode="mx" businessType="mobility"></Header>
      {children}
      <Footer
        countryCode="mx"
        businessType="mobility"
        languageCode="es"
      ></Footer>
    </>
  );
}
