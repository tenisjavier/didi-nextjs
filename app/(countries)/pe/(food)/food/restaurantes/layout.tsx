import SmartBanner from "@/components/SmartBanner";

export default async function MXLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <SmartBanner
        countryCode="pe"
        title="Registra tu Restaurante"
        desc="Crece con DiDi"
        btnType="foodBusiness"
        btnMode="primary"
        type="foodBusiness"
        btnText="Regístrate"
        textColor="gray-primary"
        bgColor="bg-white"
      ></SmartBanner>
    </>
  );
}
