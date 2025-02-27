import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import ReturnToTop from "@/components/return-to-top";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

const manrope = Manrope({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "MDR x ENSCi | Un partenariat d'exception entre design et haute horlogerie",
  description:
    "MDR x ENSCi | Un partenariat d'exception entre design et haute horlogerie",
  icons: {
    icon: [
      {
        rel: "icon",
        media: "(prefers-color-scheme: light)",
        type: "image/png",
        url: "/favicon/favicon-white.svg",
      },
      {
        rel: "icon",
        media: "(prefers-color-scheme: dark)",
        type: "image/png",
        url: "/favicon/favicon-white.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} antialiased relative text-[#253031] bg-[#CDDBDE]`}>
        <ReturnToTop />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
