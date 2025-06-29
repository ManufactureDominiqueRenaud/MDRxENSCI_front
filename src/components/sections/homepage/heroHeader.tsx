"use client";

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
import Autoplay from "embla-carousel-autoplay";

function HeroHeader(sectionData: { data: StrapiHomepageHeroheader }) {
  return (
    <section>
      <Carousel
        className="relative h-screen max-w-screen overflow-hidden flex flex-col justify-center items-center"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 6000,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem>
            <div className="relative h-screen pt-8 flex flex-col justify-center items-center pl-0">
              <div className="relative z-20 flex flex-col items-center">
                <Image
                  src={sectionData.data.slides[0].logo.url || ""}
                  alt={sectionData.data.slides[0].logo.alternativeText || ""}
                  width={sectionData.data.slides[0].logo.width || 100}
                  height={sectionData.data.slides[0].logo.height || 100}
                  className="w-48 lg:w-64 mb-8"
                />
                <p className="text-2xl lg:text-4xl text-[#CDDBDE] font-bold text-center uppercase w-[90svw] marcellus-regular px-4 ">
                  Congratulations to Memento vivere
                </p>
                <p className="text-4xl lg:text-6xl text-[#CDDBDE] font-bold text-center w-[90svw] marcellus-regular">
                  2025 edition winner
                </p>
                <Button variant={"outlineCustom"} className="mt-8" asChild>
                  <Link
                    href={"/fr/memento-vivere"}
                    title={"Découvrir le projet"}
                    // target={
                    //   sectionData.data.slides[0].cta.externalLink ? "_blank" : "_self"
                    // }
                  >
                    <LucideArrowDown size={24} />
                    {sectionData.data.slides[0].cta.label || "null"}
                    <LucideArrowDown size={24} />
                  </Link>
                </Button>
              </div>
              <div className="block absolute top-0 left-0 w-full h-full bg-black/65 lg:bg-black/65 z-10"></div>
              <Image
                src="/memento-vivere-template.webp"
                alt={
                  sectionData.data.slides[0].backgroundImage.alternativeText ||
                  ""
                }
                width={1920}
                height={1080}
                className="absolute z-0 top-0 left-0 h-full w-full object-cover"
              />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-4">
                <div className="bg-slate-200 w-4 h-2 rounded-full"></div>
                <div className="bg-slate-700 w-2 h-2 rounded-full"></div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative h-screen pt-8 flex flex-col justify-center items-center pl-0">
              <div className="relative z-20 flex flex-col items-center">
                <Image
                  src={sectionData.data.slides[0].logo.url || ""}
                  alt={sectionData.data.slides[0].logo.alternativeText || ""}
                  width={sectionData.data.slides[0].logo.width || 100}
                  height={sectionData.data.slides[0].logo.height || 100}
                  className="w-48 lg:w-64 mb-8"
                />
                <h1 className="text-4xl lg:text-6xl text-[#CDDBDE] font-bold text-center w-[90svw] md:w-2/3 marcellus-regular">
                  {sectionData.data.slides[0].title || "null"}
                </h1>
                <Button variant={"outlineCustom"} className="mt-8" asChild>
                  <Link
                    href={sectionData.data.slides[0].cta.url || ""}
                    title={sectionData.data.slides[0].cta.title || ""}
                    target={
                      sectionData.data.slides[0].cta.externalLink
                        ? "_blank"
                        : "_self"
                    }
                  >
                    <LucideArrowDown size={24} />
                    {sectionData.data.slides[0].cta.label || "null"}
                    <LucideArrowDown size={24} />
                  </Link>
                </Button>
              </div>
              <div className="block absolute top-0 left-0 w-full h-full bg-black/65 lg:bg-black/65 z-10"></div>
              <Image
                src={sectionData.data.slides[0].backgroundImage.url || ""}
                alt={
                  sectionData.data.slides[0].backgroundImage.alternativeText ||
                  ""
                }
                width={1920}
                height={1080}
                className="absolute z-0 top-0 left-0 h-full w-full object-cover"
              />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-4">
                <div className="bg-slate-500 w-2 h-2 rounded-full"></div>
                <div className="bg-slate-200 w-4 h-2 rounded-full"></div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  );
}

export default HeroHeader;
