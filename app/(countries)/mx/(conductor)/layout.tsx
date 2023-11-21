import Header from "@/components/Header/index";
import Footer from "@/components/Footer/index";

export default async function MXLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header countryCode="mx" businessType="drive"></Header>
      {children}
      <Footer countryCode="mx" businessType="drive" languageCode="es"></Footer>
    </>
  );
}
