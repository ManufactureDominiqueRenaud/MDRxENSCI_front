import { StrapiAProposMDR } from "@/lib/types";
import Image from "next/image";
import React from "react";

function AProposMDR(sectionData: { data: StrapiAProposMDR }) {
  return (
    <section className="py-[150px] lg:py-[192px] px-[20px] md:px-[70px] lg:px-[120px] lg:flex items-center gap-12">
      <div className="lg:w-1/2 overflow-hidden rounded-3xl">
        <Image
          src={sectionData.data.image.url || ""}
          alt={sectionData.data.image.alternativeText || ""}
          width={sectionData.data.image.width || 1920}
          height={sectionData.data.image.height || 1080}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="lg:w-1/2 mt-8 lg:mt-0">
        <h2 className="font-bold text-3xl lg:text-5xl text-balance marcellus-regular">
          {sectionData.data.title || "null"}
        </h2>
        <p className="mt-8">{sectionData.data.paragraph || "null"}</p>
      </div>
    </section>
  );
}

export default AProposMDR;
