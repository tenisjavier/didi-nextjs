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
      <Header countryCode="pa" businessType="mobility"></Header>
      {children}
      <Footer
        countryCode="pa"
        businessType="mobility"
        languageCode="es"
      ></Footer>
      <SmartBanner
        countryCode="pa"
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
