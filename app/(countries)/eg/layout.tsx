import Header from "@/components/Header/index";
import Footer from "@/components/Footer/index";

export default async function MXLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header countryCode="eg" businessType="mobility"></Header>
      {children}
      <Footer
        countryCode="eg"
        businessType="mobility"
        languageCode="ar"
      ></Footer>
    </>
  );
}
