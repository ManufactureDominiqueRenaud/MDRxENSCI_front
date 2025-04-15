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
    attributes: {
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
    };
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
      `api/pages?filters[slug][$eq]=homepage-fr&locale=fr&populate[sections][populate][logo]=*&populate[sections][populate][cta]=*&populate[sections][populate][backgroundImage]=*&populate[sections][populate][image]=*&populate[sections][populate][carouselImages]=*`,
      [`homepage-fr`]
    )) as StrapiHomepageData;
    projectsData = await fetchStrapiData(`api/projets?locale=fr&populate=*`, [
      `projects-fr`,
    ]);
  } else {
    pageData = (await fetchStrapiData(
      `api/pages?filters[slug][$eq]=homepage-en&locale=en&populate[sections][populate][logo]=*&populate[sections][populate][cta]=*&populate[sections][populate][backgroundImage]=*&populate[sections][populate][image]=*&populate[sections][populate][carouselImages]=*`,
      ["homepage-en"]
    )) as StrapiHomepageData;
    projectsData = await fetchStrapiData(`api/projets?locale=en&populate=*`, [
      `projects-en`,
    ]);
  }

  return (
    <main>
      {pageData.data[0].attributes.sections &&
        pageData.data[0].attributes.sections.map((item, index) => {
          switch (item.__component) {
            case "sections-homepage.hero-header":
              return <HeroHeader data={item} key={index + item.__component} />;
            case "sections-homepage.atelier-projet":
              return <AtelierProjet data={item} key={index + item.__component} />;
            case "sections-homepage.collab-section":
              return <Collaboration data={item} key={index + item.__component} />;
            case "sections-homepage.dominique-renaud-section":
              return <DominiqueCitation data={item} key={index + item.__component} />;
            case "sections-homepage.project-folio":
              return (
                <ProjectsFolio
                  sectionData={item}
                  projects={projectsData.data}
                  locale={locale}
                  key={index + item.__component}
                />
              );
            case "sections-homepage.carousel-section":
              return <CarouselHome data={item} key={index + item.__component} />;
            case "sections-homepage.mdr-details":
              return <AProposMDR data={item} key={index + item.__component} />;
            default:
              return null;
          }
        })}
    </main>
  );
}
