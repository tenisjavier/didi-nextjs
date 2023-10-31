import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header/index";
import { headers } from "next/headers";
import { CountryCode } from "@/typings";

const countryCode = headers().get("x-country-code") as CountryCode;

export const metadata: Metadata = {
  title: {
    default: "DiDi Global - The World's Leader in Mobility Technology",
    template: `%s | DiDi ${countryCode}`,
  },
};

const aspira = localFont({
  src: [
    {
      path: "./aspira-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./aspira-bold.woff2",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-aspira",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${aspira.variable} font-sans`}>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
