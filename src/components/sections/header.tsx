"use client";

import { StrapiComponentImage } from "@/lib/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";

type StrapiHeaderData = {
  data: {
    data: {
      id: number;
      attributes: {
        title: string;
        logo: {
          data: {
            attributes: StrapiComponentImage;
          };
        };
      };
    };
  };
};

export default function Header(headerData: StrapiHeaderData) {
  const router = useRouter();
  const pathname = usePathname();
  const pathnameWithoutLocale = pathname.replace(/\/(fr|en)/, "");
  const { locale } = useParams();

  const handleLogoClick = () => {
    if (pathname !== "/") {
      router.push(`/${locale}`);
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <header className="fixed z-50 p-6 bg-gradient-to-b from-[#253031]/10 to-[#253031]/0 w-full flex justify-between items-center">
      <div
        title="Retour à la homepage"
        onClick={handleLogoClick}
        className="w-[60px] lg:w-[85px] bg-[#CDDBDE] border border-[#253031]/20 p-1.5 rounded-sm shadow-ring cursor-pointer">
        <Image
          src={headerData.data.data.attributes.logo.data.attributes.url || ""}
          alt={
            headerData.data.data.attributes.logo.data.attributes
              .alternativeText || ""
          }
          width={
            headerData.data.data.attributes.logo.data.attributes.width || 100
          }
          height={
            headerData.data.data.attributes.logo.data.attributes.height || 100
          }
          style={{ mixBlendMode: "difference" }}
        />
      </div>

      {/* Sélecteur de langue */}
      <nav className="bg-[#CDDBDE] border border-[#253031]/20 md:py-1 pb-0.5 md:pb-1.5 px-1 md:px-2 rounded-sm shadow-ring">
        <ul className="flex items-center gap-2 md:gap-3">
          <li>
            <Link
              href={`/fr${pathnameWithoutLocale}`}
              className={cn(
                "text-xs px-2 rounded-sm",
                locale === "fr"
                  ? "text-[#CDDBDE] bg-[#253031]"
                  : "text-[#253031] bg-[#CDDBDE]"
              )}>
              fr
            </Link>
          </li>
          <li>
            <Link
              href={`/en${pathnameWithoutLocale}`}
              className={cn(
                " text-xs px-2 rounded-sm",
                locale === "en"
                  ? "text-[#CDDBDE] bg-[#253031]"
                  : "text-[#253031] bg-[#CDDBDE]"
              )}>
              en
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
