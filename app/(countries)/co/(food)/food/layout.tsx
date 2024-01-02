import Header from "@/components/Header/index";
import Footer from "@/components/Footer/index";

export default async function MXLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header countryCode="co" businessType="food"></Header>
      {children}
      <Footer
        countryCode="co"
        businessType="food"
        languageCode="es"
      ></Footer>
    </>
  );
}
