import Header from "@/components/Header/index";
import Footer from "@/components/Footer/index";

export default async function MXLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header countryCode="mx" businessType="pay"></Header>
      {children}
      <Footer countryCode="mx" businessType="pay" languageCode="es"></Footer>
    </>
  );
}
