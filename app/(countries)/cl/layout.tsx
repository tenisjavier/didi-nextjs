import Header from "@/components/Header/index";
import Footer from "@/components/Footer/index";

export default async function MXLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header countryCode="cl" businessType="mobility"></Header>
      {children}
      <Footer
        countryCode="cl"
        businessType="mobility"
        languageCode="es"
      ></Footer>
    </>
  );
}
