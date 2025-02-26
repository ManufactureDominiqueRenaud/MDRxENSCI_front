"use client";

import Image from "next/image";
import React from "react";
import { ScrollProgress } from "../magicui/scroll-progress";

function Header() {
  return (
    <>
      <ScrollProgress className="top-0" />
      <header className="fixed z-50 p-6 bg-gradient-to-b from-[#253031]/10 to-[#253031]/0 w-full flex justify-between items-center">
        <div
          className="w-[60px] lg:w-[85px] bg-[#CDDBDE] border border-[#253031]/20 p-1.5 rounded-sm shadow-ring cursor-pointer"
          onClick={() => window.scrollTo(0, 0)}>
          <Image
            src={"/logo-mdr.svg"}
            alt="logo"
            width={100}
            height={100}
            style={{ mixBlendMode: "difference" }}
          />
        </div>
      </header>
    </>
  );
}

export default Header;
