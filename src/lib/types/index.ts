//COMPONENTS BLOCKS
export type StrapiComponentLink = {
  id: number;
  label: string;
  url: string;
  externalLink: boolean | null;
  title: string;
};
export type StrapiComponentImage = {
  width: number;
  height: number;
  url: string;
  caption?: string;
  alternativeText?: string;
};
export type StrapiComponentVideo = {
  width: number | null;
  height: number | null;
  url: string;
  caption?: string | null;
  alternativeText?: string | null;
};

//SECTIONS BLOCKS
export type StrapiHomepageHeroheader = {
  __component: "sections-homepage.hero-header";
  slides: {
    title: string;
    logo: StrapiComponentImage;
    cta: StrapiComponentLink;
    backgroundImage: StrapiComponentImage;
  }[];
};
export type StrapiAtelierProjet = {
  __component: "sections-homepage.atelier-projet";
  title: string;
  paragraph: string;
};
export type StrapiCollaboration = {
  __component: "sections-homepage.collaboration";
  logo: StrapiComponentImage;
  title: string;
  ctaEnsci: StrapiComponentLink;
  ctaPress: StrapiComponentLink;
};
export type StrapiDominiqueCitation = {
  __component: "sections-homepage.dominique-renaud";
  citation: string;
  name: string;
  paragraph: string;
  image: StrapiComponentImage;
};
export type StrapiCarouselHome = {
  __component: "sections-homepage.carousel";
  title: string;
  id: number;
  carouselImages: StrapiComponentImage[];
};
export type StrapiAProposMDR = {
  __component: "sections-homepage.mdr-details";
  title: string;
  paragraph: string;
  image: StrapiComponentImage;
};
export type StrapiProjetsFolioSection = {
  __component: "sections-homepage.project-folio";
  title: string;
  paragraph: string;
  paragraph2: string;
  paragraph3: string;
};
