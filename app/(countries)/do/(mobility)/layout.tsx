import Header from "@/components/Header/index";
import Footer from "@/components/Footer/index";

export default async function MXLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header countryCode="pa" businessType="mobility"></Header>
      {children}
      <Footer
        countryCode="do"
        businessType="mobility"
        languageCode="es"
      ></Footer>
    </>
  );
}
