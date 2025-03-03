"use client";

import { StrapiComponentImage } from "@/lib/types";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

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

  const handleLogoClick = () => {
    if (pathname !== "/") {
      router.push("/");
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
    </header>
  );
}
