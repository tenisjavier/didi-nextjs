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
      <Header countryCode="cl" businessType="mobility"></Header>
      {children}
      <Footer
        countryCode="cl"
        businessType="mobility"
        languageCode="es"
      ></Footer>
      <SmartBanner
        countryCode="cl"
        title="DiDi Conductor"
        desc="Ganancias Extras"
        btnType="drv"
        btnMode="primary"
        type="drv"
        btnText="Regístrate"
        textColor="gray-primary"
        bgColor="bg-white"
      ></SmartBanner>
    </>
  );
}
