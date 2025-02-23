"use server";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { LucideArrowDown, LucideArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="text-slate-950">
      {/* HEADER */}
      <header className="fixed z-50 p-8 bg-gradient-to-b from-slate-950/10 to-slate-950/0 w-full flex justify-between items-center">
        <div className="w-[75px] mix-blend-difference">
          <Image src={"/logo.svg"} alt="logo" width={100} height={100} />
        </div>
      </header>

      {/* HERO HEADER */}
      <section className="relative h-screen flex flex-col justify-center items-center">
        <div className="relative z-20 flex flex-col items-center">
          <h1 className="text-6xl text-slate-50 font-bold text-center w-2/3">
            Un partenariat d&apos;exception entre design et haute horlogerie
          </h1>
          <Button variant={"outline"} size={"lg"} className="mt-8">
            <LucideArrowDown size={24} />
            Découvrir le projet
            <LucideArrowDown size={24} />
          </Button>
        </div>
        <div className="block absolute top-0 left-0 w-full h-full bg-black/55 z-10"></div>
        <Image
          src={"/hero.jpg"}
          alt="hero"
          width={1920}
          height={1080}
          className="absolute z-0 top-0 left-0 h-full w-full object-cover"
        />
      </section>

      {/* ATELIER DE PROJET */}
      <section className="py-[192px] px-[120px] bg-slate-50 text-slate-950 text-center">
        <h2 className="font-bold text-5xl">L&apos;atelier de projet</h2>
        <p className="mt-4">
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
      <section className="bg-slate-950 text-slate-50 py-[192px] px-[120px] flex items-center jusitfy-between">
        <div className="flex items-center gap-12">
          <Image src={"/logo.svg"} alt="logo" width={100} height={100} />
          <h2 className="font-bold text-5xl w-3/4">
            Un projet en collaboration avec l&apos;ENSCi
          </h2>
        </div>
        <div className="flex flex-col items-end gap-4">
          <Button variant={"outline"} size={"lg"} className="text-slate-950">
            Télécharger le communiqué de presse
          </Button>
          <Button variant={"link"} size={"lg"} className="text-slate-50">
            Découvrir plus
            <LucideArrowRight size={24} />
          </Button>
        </div>
      </section>

      {/* Dominique */}
      <section className="pt-[192px] pb-[96px] px-[120px] flex items-stretch gap-12">
        <div className="w-1/2">
          <div className="bg-slate-950 text-slate-50 p-8 rounded-3xl">
            <p className="font-bold italic text-2xl">
              «L&apos;innovation est un processus vivant et collectif qu&apos;il
              est important de ne jamais figer dans des cadres préétablis.»
            </p>
            <p className="border-l-2 border-slate-50 pl-2 mt-4">
              Dominique Renaud
            </p>
          </div>
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
        <div className="w-1/2 overflow-hidden rounded-3xl">
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
      <section className="py-[96px] px-[240px] flex flex-col items-center gap-12">
        <h2 className="font-bold text-center w-full text-5xl">
          Découvrez le projet en photo
        </h2>
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}>
          <CarouselContent>
            <CarouselItem>
              <div className="w-full h-full flex flex-col items-center justify-center">
                <div className="w-3/4 max-h-[70svh]">
                  <Image
                    src={"/carousel/1.jpg"}
                    alt="carousel"
                    className="w-full h-full object-contain"
                    width={1920}
                    height={1080}
                  />
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="w-full h-full flex flex-col items-center justify-center">
                <div className="w-3/4 max-h-[70svh]">
                  <Image
                    src={"/carousel/2.jpg"}
                    alt="carousel"
                    className="w-full h-full object-contain"
                    width={1920}
                    height={1080}
                  />
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="w-full h-full flex flex-col items-center justify-center">
                <div className="w-3/4 max-h-[70svh]">
                  <Image
                    src={"/carousel/3.jpg"}
                    alt="carousel"
                    className="w-full h-full object-contain"
                    width={1920}
                    height={1080}
                  />
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="w-full h-full flex flex-col items-center justify-center">
                <div className="w-3/4 max-h-[70svh]">
                  <Image
                    src={"/carousel/4.jpg"}
                    alt="carousel"
                    className="w-full h-full object-contain"
                    width={1920}
                    height={1080}
                  />
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="w-full h-full flex flex-col items-center justify-center">
                <div className="w-3/4 max-h-[70svh]">
                  <Image
                    src={"/carousel/5.jpg"}
                    alt="carousel"
                    className="w-full h-full object-contain"
                    width={1920}
                    height={1080}
                  />
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="w-full h-full flex flex-col items-center justify-center">
                <div className="w-3/4 max-h-[70svh]">
                  <Image
                    src={"/carousel/6.jpg"}
                    alt="carousel"
                    className="w-full h-full object-contain"
                    width={1920}
                    height={1080}
                  />
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="w-full h-full flex flex-col items-center justify-center">
                <div className="w-3/4 max-h-[70svh]">
                  <Image
                    src={"/carousel/7.jpg"}
                    alt="carousel"
                    className="w-full h-full object-contain"
                    width={1920}
                    height={1080}
                  />
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="w-full h-full flex flex-col items-center justify-center">
                <div className="w-3/4 max-h-[70svh]">
                  <Image
                    src={"/carousel/8.jpg"}
                    alt="carousel"
                    className="w-full h-full object-contain"
                    width={1920}
                    height={1080}
                  />
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="w-full h-full flex flex-col items-center justify-center">
                <div className="w-3/4 max-h-[70svh]">
                  <Image
                    src={"/carousel/9.jpg"}
                    alt="carousel"
                    className="w-full h-full object-contain"
                    width={1920}
                    height={1080}
                  />
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* A propos de MDR */}
      <section className="pb-[192px] pt-[96px] px-[120px] flex items-center gap-12">
        <div className="w-1/2 overflow-hidden rounded-3xl">
          <Image
            src={"/a-propos_mdr.webp"}
            alt="Dominique Renaud et Julien Tixier de Manufacture Dominique Renaud se font face dans leur atelier"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2">
          <h2 className="font-bold text-5xl">
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

      {/* FOOTER */}
      <footer className="p-[40px]">
        <div className="bg-slate-950 text-slate-50 flex items-center gap-16 px-[80px] py-16 rounded-3xl">
          <div className="flex flex-col gap-8 w-1/2">
            <Image
              src={"/logo.svg"}
              alt="logo"
              width={100}
              height={100}
              className="w-[75px]"
            />
            <Link
              href="mailto:info@dominiquerenaud.com"
              className="text-slate-50/50 text-sm hover:underline transition">
              info@dominiquerenaud.com
            </Link>
          </div>
          <div className="w-1/2">
            <div>
              <p className="text-sm text-slate-50/50">
                Manufacture Dominique Renaud
              </p>
              <nav>
                <ul className="flex items-center gap-4">
                  <li>
                    <Link
                      href={"https://www.renaudtixier.com/fr/contact"}
                      title=""
                      className="text-slate-50 text-sm hover:underline transition">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"https://www.instagram.com/renaud.tixier/"}
                      title=""
                      className="text-slate-50 text-sm hover:underline transition">
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"https://www.renaudtixier.com/"}
                      title=""
                      className="text-slate-50 text-sm hover:underline transition">
                      Site web
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex items-center gap-4 mt-8">
              <nav>
                <ul className="flex items-center gap-4">
                  <li>
                    <Link
                      href={"#"}
                      title=""
                      className="text-slate-50/50 text-sm hover:underline transition">
                      Mentions Légales
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"#"}
                      title=""
                      className="text-slate-50/50 text-sm hover:underline transition">
                      Politique de Cookies
                    </Link>
                  </li>
                </ul>
              </nav>
              <span className="text-sm text-slate-50/50">
                © 2025 — Maison Dominique Renaud, ENSCI
              </span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
