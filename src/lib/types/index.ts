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
  alt?: string;
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
};
