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

//SECTIONS BLOCKS
export type StrapiHomepageHeroheader = {
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
  title: string;
  paragraph: string;
};
export type StrapiCollaboration = {
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
  title: string;
  carouselImages: {
    data: {
      id: number;
      attributes: StrapiComponentImage;
    }[];
  };
};
export type StrapiAProposMDR = {
  title: string;
  paragraph: string;
  image: {
    data: {
      attributes: StrapiComponentImage;
    };
  };
};
