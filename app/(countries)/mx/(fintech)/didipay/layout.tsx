import Header from "@/components/Header/index";
import Footer from "@/components/Footer/index";
import SmartBanner from "@/components/SmartBanner";
export default async function MXLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header countryCode="mx" businessType="pay"></Header>
      {children}
      <SmartBanner
        countryCode="mx"
        title="DiDi Préstamos"
        desc="Solicítalo en 5 min."
        btnType="pay"
        btnMode="primary"
        type="pay"
        btnText="Descarga"
        textColor="gray-primary"
        bgColor="bg-white"
      ></SmartBanner>
      <Footer countryCode="mx" businessType="pay" languageCode="es"></Footer>
    </>
  );
}
