import { Button } from "@/components/ui/button";
import { StrapiCollaboration } from "@/lib/types";
import { LucideArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Collaboration(sectionData: { data: StrapiCollaboration }) {
  return (
    <section className="bg-[#253031] text-[#CDDBDE] py-[150px] lg:py-[192px] px-[20px] lg:px-[120px] lg:flex items-center jusitfy-between">
      <div className="w-full lg:w-3/4">
        <Image
          src={sectionData.data.logo.url || ""}
          alt={sectionData.data.logo.alternativeText || ""}
          width={sectionData.data.logo.width || 100}
          height={sectionData.data.logo.height || 100}
          className="w-64 lg:w-48 mb-8 mx-0 md:mx-auto lg:mx-0"
        />
        <h2 className="font-bold text-3xl lg:text-5xl w-full lg:w-3/4 mt-4 lg:mt-0 md:text-center lg:text-left lg:text-balance marcellus-regular">
          {sectionData.data.title || "null"}
        </h2>
      </div>
      <div className="flex flex-col items-start md:items-center lg:items-end gap-4 w-full lg:w-1/4 mt-8 lg:mt-0">
        <Button variant={"outlineCustom"} className="text-[#253031]" asChild>
          <Link
            href={sectionData.data.ctaPress.url || ""}
            target="_blank"
            title={sectionData.data.ctaPress.title || ""}
          >
            {sectionData.data.ctaPress.label || "null"}
          </Link>
        </Button>
        <Button variant={"link"} className="text-[#CDDBDE]" asChild>
          <Link
            href={sectionData.data.ctaEnsci.url || ""}
            target={sectionData.data.ctaEnsci.externalLink ? "_blank" : "_self"}
            title={sectionData.data.ctaEnsci.title || ""}
          >
            <span className="flex items-center">
              {sectionData.data.ctaEnsci.label || "null"}
              <LucideArrowRight size={24} />
            </span>
          </Link>
        </Button>
      </div>
    </section>
  );
}

export default Collaboration;
