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
