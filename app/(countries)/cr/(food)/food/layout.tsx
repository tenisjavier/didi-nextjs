import Header from "@/components/Header/index";
import Footer from "@/components/Footer/index";

export default async function MXLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header countryCode="cr" businessType="food"></Header>
      {children}
      <Footer
        countryCode="cr"
        businessType="food"
        languageCode="es"
      ></Footer>
    </>
  );
}
