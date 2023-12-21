import Header from "@/components/Header/index";
import Footer from "@/components/Footer/index";

export default async function MXLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header countryCode="pe" businessType="food"></Header>
      {children}
      <Footer
        countryCode="pe"
        businessType="food"
        languageCode="es"
      ></Footer>
    </>
  );
}
