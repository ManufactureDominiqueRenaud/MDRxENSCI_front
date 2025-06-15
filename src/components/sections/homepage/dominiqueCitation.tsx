import { StrapiDominiqueCitation } from "@/lib/types";
import Image from "next/image";
import React from "react";

function DominiqueCitation(sectionData: { data: StrapiDominiqueCitation }) {
  return (
    <section className="pt-[150px] pb-[75px] lg:py-[192px] px-[20px] md:px-[70px] lg:px-[120px] lg:flex items-center gap-12">
      <div className="lg:w-1/2">
        <p className="font-bold italic text-xl lg:text-2xl marcellus-regular">
          {sectionData.data.citation || "null"}
        </p>
        <p className="border-l-2 border-[#253031] pl-2 mt-4 text-sm lg:text-base">
          {sectionData.data.name || "null"}
        </p>
        <p className="mt-8">{sectionData.data.paragraph || "null"}</p>
      </div>
      <div className="lg:w-1/2 overflow-hidden rounded-3xl mt-8 lg:mt-0">
        <Image
          src={sectionData.data.image.url || ""}
          alt={sectionData.data.image.alternativeText || ""}
          width={sectionData.data.image.width || 1920}
          height={sectionData.data.image.height || 1080}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}

export default DominiqueCitation;
