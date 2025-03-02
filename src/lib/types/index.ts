type Link = {
  id: number;
  Label: string;
  Url: string;
  ExternalLink: boolean | null;
  Title: string;
};

type Image = {
  width: number;
  height: number;
  url: string;
  alt?: string;
};

type StrapiFooterData = {
  data: {
    data: {
      id: number;
      attributes: {
        Title: string;
        Copyright: string;
        Logo: {
          data: {
            attributes: Image;
          };
        };
        FooterLinks: Link[];
        LegalLinks: Link[];
      };
    };
  };
};
