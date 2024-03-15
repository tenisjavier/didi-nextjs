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
        title="DiDi Repartidor"
        desc="Ganancias Extras"
        btnType="foodDelivery"
        btnMode="primary"
        type="foodDelivery"
        btnText="Registrate"
        textColor="gray-primary"
        bgColor="bg-white"
      ></SmartBanner>
    </>
  );
}
