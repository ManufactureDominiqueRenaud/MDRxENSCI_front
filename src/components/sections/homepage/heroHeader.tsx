"use server";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { StrapiHomepageHeroheader } from "@/lib/types";
import { LucideArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

function HeroHeader(sectionData: { data: StrapiHomepageHeroheader }) {
  return (
    <section>
      <Carousel
        className="relative h-screen flex flex-col justify-center items-center"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          <CarouselItem>
            <div className="relative h-screen pt-8 flex flex-col justify-center items-center pl-0">
              <div className="relative z-20 flex flex-col items-center">
                <Image
                  src={sectionData.data.logo.data.attributes.url || ""}
                  alt={
                    sectionData.data.logo.data.attributes.alternativeText || ""
                  }
                  width={sectionData.data.logo.data.attributes.width || 100}
                  height={sectionData.data.logo.data.attributes.height || 100}
                  className="w-48 lg:w-64 mb-8"
                />
                <p className="text-2xl lg:text-4xl text-[#CDDBDE] font-bold text-center uppercase w-full marcellus-regular">
                  Congratulations to Memento vivere
                </p>
                <p className="text-4xl lg:text-6xl text-[#CDDBDE] font-bold text-center w-full marcellus-regular">
                  2025 edition winner
                </p>
                <Button variant={"outlineCustom"} className="mt-8" asChild>
                  <Link
                    href={"/fr/memento-vivere"}
                    title={"Découvrir le projet"}
                    // target={
                    //   sectionData.data.cta.externalLink ? "_blank" : "_self"
                    // }
                  >
                    <LucideArrowDown size={24} />
                    {sectionData.data.cta.label || "null"}
                    <LucideArrowDown size={24} />
                  </Link>
                </Button>
              </div>
              <div className="block absolute top-0 left-0 w-full h-full bg-black/65 lg:bg-black/65 z-10"></div>
              <Image
                src="/memento-vivere-template.webp"
                alt={
                  sectionData.data.backgroundImage.data.attributes
                    .alternativeText || ""
                }
                width={1920}
                height={1080}
                className="absolute z-0 top-0 left-0 h-full w-full object-cover"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative h-screen pt-8 flex flex-col justify-center items-center pl-0">
              <div className="relative z-20 flex flex-col items-center">
                <Image
                  src={sectionData.data.logo.data.attributes.url || ""}
                  alt={
                    sectionData.data.logo.data.attributes.alternativeText || ""
                  }
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
                    target={
                      sectionData.data.cta.externalLink ? "_blank" : "_self"
                    }
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
                  sectionData.data.backgroundImage.data.attributes
                    .alternativeText || ""
                }
                width={1920}
                height={1080}
                className="absolute z-0 top-0 left-0 h-full w-full object-cover"
              />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute left-8 top-1/2 -translate-y-1/2 z-[100] bg-transparent text-white/50 border-white/50" />
        <CarouselNext className="absolute right-8 top-1/2 -translate-y-1/2 z-[100] bg-transparent text-white/50 border-white/50" />
      </Carousel>
    </section>
  );
}

export default HeroHeader;
