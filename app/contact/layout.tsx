import Header from "@/components/Header/index";
import Footer from "@/components/Footer/index";

export default async function MXLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header countryCode="en" businessType="mobility"></Header>
      {children}
      <Footer
        countryCode="en"
        businessType="mobility"
        languageCode="en"
      ></Footer>
    </>
  );
}
