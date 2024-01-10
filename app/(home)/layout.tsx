import "../globals.css";
import localFont from "next/font/local";
import GTM from "@/config/tracking/gtm";
import SmartBanner from "@/components/SmartBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const aspira = localFont({
  src: [
    {
      path: "../../public/font/aspira-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/aspira-bold.woff2",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-aspira",
});

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={`${aspira.variable} font-sans`}>
        <Header countryCode="en" businessType="mobility"></Header>
        <div itemScope itemType="https://schema.org/WebSite">
          <meta itemProp="url" content="https://web.didiglobal.com/" />
          <meta itemProp="name" content="DiDi" />
        </div>
        {children}
        <SmartBanner
          countryCode="en"
          title="Download DiDi"
          desc="Rides, food and more"
          btnType="pax"
          btnMode="primary"
          type="pax"
          btnText="Download"
          textColor="gray-primary"
          bgColor="bg-white"
        ></SmartBanner>
        <GTM />
        <Footer
          countryCode="en"
          businessType="mobility"
          languageCode="en"
        ></Footer>
      </body>
    </html>
  );
}
