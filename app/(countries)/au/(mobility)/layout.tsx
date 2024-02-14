import Header from "@/components/Header/index";
import Footer from "@/components/Footer/index";
import Script from "next/script";
export default async function MXLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header countryCode="au" businessType="mobility"></Header>
      {children}
      <Footer
        countryCode="au"
        businessType="mobility"
        languageCode="en"
      ></Footer>
      <Script
        src="https://cdn-apac.onetrust.com/scripttemplates/otSDKStub.js"
        type="text/javascript"
        data-domain-script="f9f9aeb2-1532-4a70-bafe-28fce845d41c"
      ></Script>
    </>
  );
}
