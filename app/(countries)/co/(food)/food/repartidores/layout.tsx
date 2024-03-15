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
        countryCode="co"
        title="DiDi Repartidor"
        desc="Ganancias Extras"
        btnType="foodDelivery"
        btnMode="primary"
        type="foodDelivery"
        btnText="Regístrate"
        textColor="gray-primary"
        bgColor="bg-white"
      ></SmartBanner>
    </>
  );
}
