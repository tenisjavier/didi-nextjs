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
        countryCode="cl"
        title="DiDi Pasajero"
        desc="Ganancias Extras"
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
