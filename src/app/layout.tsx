import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import ReturnToTop from "@/components/return-to-top";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { fetchStrapiData } from "@/lib/strapi-api";
import { ScrollProgress } from "@/components/magicui/scroll-progress";

const manrope = Manrope({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "MDR x ENSCi | Un partenariat d'exception entre design et haute horlogerie",
  description:
    "MDR x ENSCi | Un partenariat d'exception entre design et haute horlogerie",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerData = await fetchStrapiData("api/header?populate=*", ["header"]);

  return (
    <html lang="en">
      <body
        className={`${manrope.className} antialiased relative text-[#253031] bg-[#CDDBDE]`}>
        <ReturnToTop />
        <ScrollProgress />
        <Header logoUrl={headerData.data.attributes.Logo.data.attributes.url} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
