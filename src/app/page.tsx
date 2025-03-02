import HeroHeader from "@/components/sections/homepage/heroHeader";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { fetchStrapiData } from "@/lib/strapi-api";
import { StrapiHomepageHeroheader } from "@/lib/types";
import { LucideArrowRight } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

//PAGE METADTA
export const metadata: Metadata = {
  title:
    "MDR x ENSCi| Un partenariat d'exception entre design et haute horlogerie",
  description:
    "MDR x ENSCi | Un partenariat d'exception entre design et haute horlogerie",
};

//STRAPI DATA TYPES
export type StrapiHomepageData = {
  data: {
    id: number;
    attributes: {
      title: string;
      description: string;
      slug: string;
      sections: [StrapiHomepageHeroheader];
    };
  }[];
};

//PAGE
export default async function Home() {
  const dataCarousel = [
    { src: "/carousel/1.jpg", alt: "carousel 1" },
    { src: "/carousel/2.jpg", alt: "carousel 2" },
    { src: "/carousel/3.jpg", alt: "carousel 3" },
    { src: "/carousel/4.jpg", alt: "carousel 4" },
    { src: "/carousel/5.jpg", alt: "carousel 5" },
    { src: "/carousel/6.jpg", alt: "carousel 6" },
    { src: "/carousel/7.jpg", alt: "carousel 7" },
    { src: "/carousel/8.jpg", alt: "carousel 8" },
    { src: "/carousel/9.jpg", alt: "carousel 9" },
  ];

  const pageData = (await fetchStrapiData(
    "api/pages?filters[slug][$eq]=homepage&populate[sections][populate]=*",
    ["homepage"]
  )) as StrapiHomepageData;

  return (
    <main>
      {/* HERO HEADER */}
      <HeroHeader data={pageData.data[0].attributes.sections[0]} />

      {/* ATELIER DE PROJET */}
      <section className="py-[150px] lg:py-[192px] px-[20px] md:px-[70px] lg:px-[120px] bg-[#CDDBDE] text-[#253031] text-left md:text-center">
        <h2 className="font-bold text-3xl lg:text-5xl text-marcellus">
          L&apos;atelier de projet
        </h2>
        <p className="mt-4 font-serif-p">
          Manufacture Dominique Renaud et l&apos;ENSCI-Les Ateliers, École
          Nationale Supérieure de Création Industrielle, s&apos;associent autour
          d&apos;un atelier de projet sur la création horlogère. Pendant quatre
          mois, les élèves de l&apos;ENSCI ont exploré et interprété des
          concepts tels que la perception et la lecture du temps, et les ont
          traduit en applications concrètes sur la montre. Ce projet associe les
          valeurs communes d&apos;innovation et de partage, unissant
          enseignement supérieur et industrie, au service de la création
          horlogère.
        </p>
      </section>

      {/* COLLAB */}
      <section className="bg-[#253031] text-[#CDDBDE] py-[150px] lg:py-[192px] px-[20px] lg:px-[120px] lg:flex items-center jusitfy-between">
        <div className="w-full lg:w-3/4">
          <Image
            src={"/logo-horizontal.svg"}
            alt="logo"
            width={100}
            height={100}
            className="w-24 lg:w-48 mb-8"
          />
          <h2 className="font-bold text-3xl lg:text-5xl w-full lg:w-3/4 mt-4 lg:mt-0 md:text-center lg:text-left lg:text-balance text-marcellus">
            Un projet en collaboration avec l&apos;ENSCi
          </h2>
        </div>
        <div className="flex flex-col items-start md:items-center lg:items-end gap-4 w-full lg:w-1/4 mt-8 lg:mt-0">
          <Button variant={"outlineCustom"} className="text-[#253031]" asChild>
            <Link
              href={
                "https://tekpzijxcpujrulsvtci.supabase.co/storage/v1/object/public/supabase/files/24.11.14%20-%20ENSCI%20x%20Manufacture%20Dominique%20Renaud%20-%20ENG.pdf"
              }
              target="_blank"
              title="Télécharger le communiqué de presse">
              Télécharger le communiqué de presse
            </Link>
          </Button>
          <Button variant={"link"} className="text-[#CDDBDE]" asChild>
            <Link href={"https://www.ensci.com/"} target="_blank">
              Découvrir plus
              <LucideArrowRight size={24} />
            </Link>
          </Button>
        </div>
      </section>

      {/* Dominique */}
      <section className="pt-[150px] pb-[75px] lg:py-[192px] px-[20px] md:px-[70px] lg:px-[120px] lg:flex items-center gap-12">
        <div className="lg:w-1/2">
          <p className="font-bold italic text-xl lg:text-2xl text-marcellus">
            «L&apos;innovation est un processus vivant et collectif qu&apos;il
            est important de ne jamais figer dans des cadres préétablis.»
          </p>
          <p className="border-l-2 border-[#CDDBDE] pl-2 mt-4 text-sm lg:text-base">
            Dominique Renaud
          </p>
          <p className="mt-8">
            Tout comme les élèves sont encouragés à explorer sans contraintes,
            Dominique Renaud a toujours considéré les chemins inexplorés comme
            des sources d&apos;inspiration et des opportunités pour innover. Sa
            carrière est marquée par sa capacité à sortir des sentiers battus,
            en abordant les choses différemment. Lorsqu&apos;il cofonde la
            société Renaud & Papi, il créé le premier atelier dédié au
            développement de mouvements Haute Horlogerie pour des tiers,
            travaillant notamment pour Audemars Piguet, IWC ou encore Breguet.
          </p>
        </div>
        <div className="lg:w-1/2 overflow-hidden rounded-3xl mt-8 lg:mt-0">
          <Image
            src={"/dominique.jpg"}
            alt="dominique"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* CAROUSEL */}
      <section className="py-[150px] lg:py-[192px] px-[20px] md:px-[70px] lg:px-[120px] flex flex-col items-center gap-12">
        <h2 className="font-bold text-center w-full text-3xl lg:text-5xl px-4 text-marcellus">
          Découvrez le partenariat en photo
        </h2>
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}>
          <CarouselContent className="cursor-grab">
            {dataCarousel.map((image, index) => (
              <CarouselItem key={index}>
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <div className="w-3/4 max-h-[70svh]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-contain"
                      width={1920}
                      height={1080}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          ;
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </section>

      {/* A propos de lgR */}
      <section className="py-[150px] lg:py-[192px] px-[20px] md:px-[70px] lg:px-[120px] lg:flex items-center gap-12">
        <div className="lg:w-1/2 overflow-hidden rounded-3xl">
          <Image
            src={"/a-propos_mdr.webp"}
            alt="Dominique Renaud et Julien Tixier de Manufacture Dominique Renaud se font face dans leur atelier"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <h2 className="font-bold text-3xl lg:text-5xl text-balance text-marcellus">
            À propos de Manufacture Dominique Renaud
          </h2>
          <p className="mt-8">
            Fondée en 2023, la Manufacture Dominique Renaud se positionne en
            acteur innovant de l&apos;horlogerie suisse, dédié à soutenir la
            création au travers d&apos;une infrastructure complète, allant de la
            conception à la distribution de produits horlogers. Inspirée par la
            vision de Dominique Renaud de conjuguer innovation et collaboration,
            la manufacture repose sur le travail d&apos;équipes aux savoir-faire
            complémentaires, mis au service de projets ambitieux. La marque
            Renaud Tixier, développée en interne, illustre parfaitement ce
            modèle unique : transformer les idées en projets tangibles à fort
            potentiel de développement. La Manufacture Dominique Renaud offre
            aux créateurs un cadre unique où leurs projets horlogers peuvent
            s&apos;épanouir pleinement.
          </p>
        </div>
      </section>
    </main>
  );
}
