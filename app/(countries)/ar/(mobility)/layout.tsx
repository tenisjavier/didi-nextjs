import Header from "@/components/Header/index";
import Footer from "@/components/Footer/index";

export default async function ARLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header countryCode="ar" businessType="mobility"></Header>
      {children}
      <Footer
        countryCode="ar"
        businessType="mobility"
        languageCode="es"
      ></Footer>
    </>
  );
}
