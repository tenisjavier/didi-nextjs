import "../globals.css";
import localFont from "next/font/local";
import GTM from "@/config/tracking/gtm";
import { SpeedInsights } from "@vercel/speed-insights/next";
import React, { Suspense } from "react";
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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={`${aspira.variable} font-sans`}>
        <div itemScope itemType="https://schema.org/WebSite">
          <meta itemProp="url" content="https://web.didiglobal.com/" />
          <meta itemProp="name" content="DiDi" />
        </div>
        {children}
        <Suspense fallback={"....LOADING"}>
          {" "}
          //! Put a skeleton loader here
          <GTM />
        </Suspense>
        <SpeedInsights />
      </body>
    </html>
  );
}
