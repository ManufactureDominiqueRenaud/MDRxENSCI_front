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
      title: string;
      logo: StrapiComponentImage;
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
    <header className="fixed z-[60] p-6 bg-gradient-to-b from-[#253031]/10 to-[#253031]/0 w-full flex justify-between items-center">
      <div
        title="Retour à la homepage"
        onClick={handleLogoClick}
        className="w-[60px] lg:w-[85px] bg-[#ffffff] border border-[#253031]/20 p-1.5 rounded-sm shadow-ring cursor-pointer"
      >
        <Image
          src={headerData.data.data.logo.url || ""}
          alt={headerData.data.data.logo.alternativeText || ""}
          width={headerData.data.data.logo.width || 100}
          height={headerData.data.data.logo.height || 100}
          style={{ mixBlendMode: "difference" }}
        />
      </div>

      {/* Sélecteur de langue */}
      <nav className="bg-[#ffffff] border border-[#253031]/20 md:py-1 pb-0.5 md:pb-1.5 px-1 md:px-2 rounded-sm shadow-ring">
        <ul className="flex items-center gap-2 md:gap-3">
          <li>
            <Link
              href={`/fr${pathnameWithoutLocale}`}
              className={cn(
                "text-xs px-2 rounded-sm",
                locale === "fr"
                  ? "text-[#ffffff] bg-[#253031]"
                  : "text-[#253031] bg-[#ffffff]"
              )}
            >
              fr
            </Link>
          </li>
          <li>
            <Link
              href={`/en${pathnameWithoutLocale}`}
              className={cn(
                " text-xs px-2 rounded-sm",
                locale === "en"
                  ? "text-[#ffffff] bg-[#253031]"
                  : "text-[#253031] bg-[#ffffff]"
              )}
            >
              en
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
