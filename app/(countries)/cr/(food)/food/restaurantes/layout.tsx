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
        countryCode="cr"
        title="Registra tu Restaurante"
        desc="Crecé con DiDi"
        btnType="foodBusiness"
        btnMode="primary"
        type="foodBusiness"
        btnText="Registrate"
        textColor="gray-primary"
        bgColor="bg-white"
      ></SmartBanner>
    </>
  );
}
