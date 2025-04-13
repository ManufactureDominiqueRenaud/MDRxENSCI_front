import { Button } from "@/components/ui/button";
import { StrapiHomepageHeroheader } from "@/lib/types";
import { LucideArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function HeroHeader(sectionData: { data: StrapiHomepageHeroheader }) {
  return (
    <section className="relative h-screen pt-8 flex flex-col justify-center items-center">
      <div className="relative z-20 flex flex-col items-center">
        <Image
          src={sectionData.data.logo.data.attributes.url || ""}
          alt={sectionData.data.logo.data.attributes.alternativeText || ""}
          width={sectionData.data.logo.data.attributes.width || 100}
          height={sectionData.data.logo.data.attributes.height || 100}
          className="w-48 lg:w-64 mb-8"
        />
        <h1 className="text-4xl lg:text-6xl text-[#CDDBDE] font-bold text-center w-full md:w-2/3 marcellus-regular">
          {sectionData.data.title || "null"}
        </h1>
        <Button variant={"outlineCustom"} className="mt-8" asChild>
          <Link
            href={sectionData.data.cta.url || ""}
            title={sectionData.data.cta.title || ""}
            target={sectionData.data.cta.externalLink ? "_blank" : "_self"}
          >
            <LucideArrowDown size={24} />
            {sectionData.data.cta.label || "null"}
            <LucideArrowDown size={24} />
          </Link>
        </Button>
      </div>
      <div className="block absolute top-0 left-0 w-full h-full bg-black/65 lg:bg-black/65 z-10"></div>
      <Image
        src={sectionData.data.backgroundImage.data.attributes.url || ""}
        alt={
          sectionData.data.backgroundImage.data.attributes.alternativeText || ""
        }
        width={1920}
        height={1080}
        className="absolute z-0 top-0 left-0 h-full w-full object-cover"
      />
    </section>
  );
}

export default HeroHeader;
