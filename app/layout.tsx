import "./globals.css";
import localFont from "next/font/local";
import Script from "next/script";

const aspira = localFont({
  src: [
    {
      path: "../public/font/aspira-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/font/aspira-bold.woff2",
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
    <html lang="en">
      <body className={`${aspira.variable} font-sans`}>
        {children}
        <Script src="/scripts/analytics.js"></Script>
      </body>
    </html>
  );
}
