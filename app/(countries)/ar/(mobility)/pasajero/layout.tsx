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
        countryCode="ar"
        title="DiDi Pasajero"
        desc="Pedí un Viaje"
        btnType="pax"
        btnMode="primary"
        type="pax"
        btnText="Descargá"
        textColor="gray-primary"
        bgColor="bg-white"
      ></SmartBanner>
    </>
  );
}
