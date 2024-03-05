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
        countryCode="nz"
        title="Ride with DiDi"
        desc="Safe and Fast"
        btnType="pax"
        btnMode="primary"
        type="pax"
        btnText="Download"
        textColor="gray-primary"
        bgColor="bg-white"
      ></SmartBanner>
    </>
  );
}
