import AProposMDR from "@/components/sections/homepage/aProposMDR";
import AtelierProjet from "@/components/sections/homepage/atelierProjet";
import CarouselHome from "@/components/sections/homepage/carouselHome";
import Collaboration from "@/components/sections/homepage/collaboration";
import DominiqueCitation from "@/components/sections/homepage/dominiqueCitation";
import HeroHeader from "@/components/sections/homepage/heroHeader";
import { fetchStrapiData } from "@/lib/strapi-api";
import {
  StrapiAProposMDR,
  StrapiAtelierProjet,
  StrapiCarouselHome,
  StrapiCollaboration,
  StrapiDominiqueCitation,
  StrapiHomepageHeroheader,
} from "@/lib/types";
import { Metadata } from "next";

//PAGE METADTA
export const metadata: Metadata = {
  title:
    "MDR x ENSCi | Un partenariat d'exception entre design et haute horlogerie",
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
      sections: [
        StrapiHomepageHeroheader,
        StrapiAtelierProjet,
        StrapiCollaboration,
        StrapiDominiqueCitation,
        StrapiCarouselHome,
        StrapiAProposMDR
      ];
    };
  }[];
};

//PAGE
export default async function Home({ params }: any) {
  const { locale } = params;
  let pageData: StrapiHomepageData;

  if (locale === "fr") {
    pageData = (await fetchStrapiData(
      `api/pages?filters[slug][$eq]=homepage-fr&locale=fr&populate[sections][populate][logo]=*&populate[sections][populate][cta]=*&populate[sections][populate][backgroundImage]=*&populate[sections][populate][image]=*&populate[sections][populate][carouselImages]=*`,
      [`homepage-fr`]
    )) as StrapiHomepageData;
  } else {
    pageData = (await fetchStrapiData(
      `api/pages?filters[slug][$eq]=homepage-en&locale=en&populate[sections][populate][logo]=*&populate[sections][populate][cta]=*&populate[sections][populate][backgroundImage]=*&populate[sections][populate][image]=*&populate[sections][populate][carouselImages]=*`,
      ["homepage-en"]
    )) as StrapiHomepageData;
  }

  return (
    <main>
      {/* HERO HEADER */}
      <HeroHeader data={pageData.data[0].attributes.sections[0]} />

      {/* ATELIER DE PROJET */}
      <AtelierProjet data={pageData.data[0].attributes.sections[1]} />

      {/* COLLAB */}
      <Collaboration data={pageData.data[0].attributes.sections[2]} />

      {/* Dominique */}
      <DominiqueCitation data={pageData.data[0].attributes.sections[3]} />

      {/* CAROUSEL */}
      <CarouselHome data={pageData.data[0].attributes.sections[4]} />

      {/* A propos de MDR */}
      <AProposMDR data={pageData.data[0].attributes.sections[5]} />
    </main>
  );
}
