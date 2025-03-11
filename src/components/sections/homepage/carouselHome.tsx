import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { StrapiCarouselHome } from "@/lib/types";
import Image from "next/image";
import React from "react";

function CarouselHome(sectionData: { data: StrapiCarouselHome }) {
  return (
    <section className="py-[150px] lg:py-[192px] px-[20px] md:px-[70px] lg:px-[120px] flex flex-col items-center gap-12">
      <h2 className="font-bold text-center w-full text-3xl lg:text-5xl px-4 text-marcellus">
        {sectionData.data.title || "null"}
      </h2>
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}>
        <CarouselContent className="cursor-grab">
          {sectionData.data.carouselImages.data.map((image, index) => (
            <CarouselItem key={index}>
              <div className="w-full h-full flex flex-col items-center justify-center">
                <div className="w-3/4 max-h-[70svh]">
                  <Image
                    src={image.attributes.url || ""}
                    alt={image.attributes.alternativeText || ""}
                    className="w-full h-full object-contain"
                    width={image.attributes.width || 1920}
                    height={image.attributes.height || 1080}
                  />
                </div>
                <p className="bg-black/2 border-l border-slate-600 px-4 py-2 max-w-1/2 text-center text-sm lg:text-base mt-8">
                  {image.attributes.caption || ""}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        ;
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </section>
  );
}

export default CarouselHome;
