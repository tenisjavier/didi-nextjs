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
      <Header countryCode="mx" businessType="card"></Header>
      {children}
      <SmartBanner
        countryCode="mx"
        title="DiDi Card"
        desc="Todo en una app"
        btnType="card"
        btnMode="primary"
        type="card"
        btnText="Descarga"
        textColor="gray-primary"
        bgColor="bg-white"
      ></SmartBanner>
      <Footer countryCode="mx" businessType="card" languageCode="es"></Footer>
    </>
  );
}
