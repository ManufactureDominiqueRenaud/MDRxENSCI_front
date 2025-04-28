import { Manrope, Marcellus } from "next/font/google";
import "../globals.css";
import ReturnToTop from "@/components/return-to-top";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { fetchStrapiData } from "@/lib/strapi-api";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { Analytics } from "@vercel/analytics/react";
import VoteModule from "@/components/vote-module";
import { Toaster } from "@/components/ui/toaster";

const manrope = Manrope({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: '--font-manrope',
});

const marcellus = Marcellus({
  weight: ["400"],
  subsets: ["latin"],
  variable: '--font-marcellus',
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerData = await fetchStrapiData("api/header?populate=*", ["header"]);
  const footerData = await fetchStrapiData("api/footer?populate=*", ["footer"]);
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${manrope.className} antialiased relative text-[#253031] bg-[#CDDBDE]`}
      >
        <ReturnToTop />
        {/* <VoteModule /> */}
        <ScrollProgress />
        <Header data={headerData} />
        {children}
        <Footer data={footerData} />
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
