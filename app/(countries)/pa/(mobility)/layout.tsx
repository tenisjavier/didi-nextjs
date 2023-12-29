import Header from "@/components/Header/index";
import Footer from "@/components/Footer/index";
export default async function PALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header countryCode="pa" businessType="mobility"></Header>
      {children}
      <Footer
        countryCode="pa"
        businessType="mobility"
        languageCode="es"
      ></Footer>
    </>
  );
}
