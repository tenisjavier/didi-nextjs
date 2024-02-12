import Header from "@/components/Header/index";
import Footer from "@/components/Footer/index";

export default async function MXLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header countryCode="pe" businessType="mobility"></Header>
      {children}
      <Footer
        countryCode="pe"
        businessType="mobility"
        languageCode="es"
      ></Footer>
    </>
  );
}
