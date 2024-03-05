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
        countryCode="ec"
        title="DiDi Pasajero"
        desc="Pide un Viaje"
        btnType="pax"
        btnMode="primary"
        type="pax"
        btnText="Descarga"
        textColor="gray-primary"
        bgColor="bg-white"
      ></SmartBanner>
    </>
  );
}
