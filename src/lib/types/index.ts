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
  title: string;
  logo: {
    data: {
      attributes: StrapiComponentImage;
    };
  };
  cta: StrapiComponentLink;
  backgroundImage: {
    data: {
      attributes: StrapiComponentImage;
    };
  };
};
export type StrapiAtelierProjet = {
  __component: "sections-homepage.atelier-projet";
  title: string;
  paragraph: string;
};
export type StrapiCollaboration = {
  __component: "sections-homepage.collab-section";
  logo: {
    data: {
      attributes: StrapiComponentImage;
    };
  };
  title: string;
  labelCtaDownloadPressArticle: string;
  pdfUrl: string;
  cta: StrapiComponentLink;
};
export type StrapiDominiqueCitation = {
  __component: "sections-homepage.dominique-renaud-section";
  citation: string;
  name: string;
  paragraph: string;
  image: {
    data: {
      attributes: StrapiComponentImage;
    };
  };
};
export type StrapiCarouselHome = {
  __component: "sections-homepage.carousel-section";
  title: string;
  carouselImages: {
    data: {
      id: number;
      attributes: StrapiComponentImage;
    }[];
  };
};
export type StrapiAProposMDR = {
  __component: "sections-homepage.mdr-details";
  title: string;
  paragraph: string;
  image: {
    data: {
      attributes: StrapiComponentImage;
    };
  };
};
export type StrapiProjetsFolioSection = {
  __component: "sections-homepage.project-folio";
  title: string;
  paragraph: string;
  paragraph2: string;
  paragraph3: string;
};
