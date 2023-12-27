import Header from "@/components/Header/index";
import Footer from "@/components/Footer/index";

export default async function MXLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header countryCode="nz" businessType="mobility"></Header>
      {children}
      <Footer
        countryCode="nz"
        businessType="mobility"
        languageCode="en"
      ></Footer>
    </>
  );
}
