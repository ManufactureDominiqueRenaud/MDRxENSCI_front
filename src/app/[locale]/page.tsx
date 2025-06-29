import AProposMDR from "@/components/sections/homepage/aProposMDR";
import AtelierProjet from "@/components/sections/homepage/atelierProjet";
import CarouselHome from "@/components/sections/homepage/carouselHome";
import Collaboration from "@/components/sections/homepage/collaboration";
import DominiqueCitation from "@/components/sections/homepage/dominiqueCitation";
import HeroHeader from "@/components/sections/homepage/heroHeader";
import ProjectsFolio from "@/components/sections/homepage/projectsFolio";
import { fetchStrapiData } from "@/lib/strapi-api";
import {
  StrapiAProposMDR,
  StrapiAtelierProjet,
  StrapiCarouselHome,
  StrapiCollaboration,
  StrapiDominiqueCitation,
  StrapiHomepageHeroheader,
  StrapiProjetsFolioSection,
} from "@/lib/types";
import { Metadata } from "next";
import { StrapiProjectsListData } from "./[projectSlug]/page";

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
    title: string;
    description: string;
    slug: string;
    sections: (
      | StrapiHomepageHeroheader
      | StrapiAtelierProjet
      | StrapiCollaboration
      | StrapiDominiqueCitation
      | StrapiProjetsFolioSection
      | StrapiCarouselHome
      | StrapiAProposMDR
    )[];
  }[];
};

//PAGE
export default async function Home({ params }: any) {
  const { locale } = await params;
  let pageData: StrapiHomepageData;
  let projectsData: {
    data: StrapiProjectsListData;
  };

  if (locale === "fr") {
    pageData = (await fetchStrapiData(
      `api/pages?filters[slug][$eq]=homepage&populate=*&status=published&locale=fr`,
      [`homepage-fr`]
    )) as StrapiHomepageData;
    projectsData = await fetchStrapiData(`api/projets?locale=fr&populate=*`, [
      `projects-fr`,
    ]);
  } else {
    pageData = (await fetchStrapiData(
      `api/pages?filters[slug][$eq]=homepage&populate=*&status=published&locale=en`,
      ["homepage-en"]
    )) as StrapiHomepageData;
    projectsData = await fetchStrapiData(`api/projets?locale=en&populate=*`, [
      `projects-en`,
    ]);
  }
  // let voteCounts: {
  //   projectSlug: string;
  //   voteCount: number;
  // }[] = [];
  // const response = await fetch(
  //   `${process.env.BACKOFFICE_URL}/api/votes/getAll`,
  //   {
  //     next: {
  //       revalidate: 3600, // Revalidation toutes les heures
  //     },
  //   }
  // );
  // const json = await response.json();
  // if (json && json.data) {
  //   voteCounts = json.data.map((item: any) => ({
  //     projectSlug: item.id,
  //     voteCount: item.votes,
  //   }));
  // }

  return (
    <main>
      {pageData.data[0].sections &&
        pageData.data[0].sections.map((item, index) => {
          switch (item.__component) {
            case "sections-homepage.hero-header":
              return <HeroHeader data={item} key={index + item.__component} />;
            case "sections-homepage.atelier-projet":
              return (
                <AtelierProjet data={item} key={index + item.__component} />
              );
            case "sections-homepage.collaboration":
              return (
                <Collaboration data={item} key={index + item.__component} />
              );
            case "sections-homepage.dominique-renaud":
              return (
                <DominiqueCitation data={item} key={index + item.__component} />
              );
            case "sections-homepage.project-folio":
              return (
                <ProjectsFolio
                  sectionData={item}
                  projects={projectsData.data}
                  // voteCounts={voteCounts}
                  locale={locale}
                  key={index + item.__component}
                />
              );
            case "sections-homepage.carousel":
              return (
                <CarouselHome data={item} key={index + item.__component} />
              );
            case "sections-homepage.mdr-details":
              return <AProposMDR data={item} key={index + item.__component} />;
            default:
              return null;
          }
        })}
    </main>
  );
}
