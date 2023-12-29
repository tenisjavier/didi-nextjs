import SmartBanner from "@/components/SmartBanner";
export default async function PALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <SmartBanner
        countryCode="pa"
        title="DiDi Pasajero"
        desc="Pide un Viaje"
        btnType="pax"
        btnMode="primary"
        type="pax"
        btnText="Regístrate"
        textColor="gray-primary"
        bgColor="bg-white"
      ></SmartBanner>
    </>
  );
}
