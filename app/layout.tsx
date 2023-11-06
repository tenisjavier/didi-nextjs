import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header/index";
import { headers } from "next/headers";
import { CountryCode } from "@/typings";
import BuilderComponent from "@/components/BuilderComponent";
import { fetchPageComponents } from "@/utils/db";

const countryCode = headers().get("x-country-code") as CountryCode;
const pathname = headers().get("x-pathname") as string;

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //? builder will return the array of components fetch by db by pathname
  const components = await fetchPageComponents(pathname);
  return (
    <html lang="en">
      <body className={`${aspira.variable} font-sans`}>
        <Header></Header>
        {children}
        <BuilderComponent components={components}></BuilderComponent>
      </body>
    </html>
  );
}
