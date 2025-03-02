"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

type HeaderProps = {
  logoUrl: string;
};

export default function Header({ logoUrl }: HeaderProps) {
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
          src={logoUrl}
          alt="logo"
          width={100}
          height={100}
          style={{ mixBlendMode: "difference" }}
        />
      </div>
    </header>
  );
}
