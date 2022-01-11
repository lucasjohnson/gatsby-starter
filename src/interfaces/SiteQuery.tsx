export interface SiteQuery {
  site: {
    buildTime: string;
    siteMetadata: {
      title: string;
      siteUrl: string;
      description: string;
      author: string;
      language: string;
      banner: {
        image: string;
        alt: string;
      };
      logo: {
        image: string;
        alt: string;
      };
      social: {
        twitter: {
          username: string;
          url: string;
          title: string;
        };
        github: {
          username: string;
          url: string;
          title: string;
        };
      };
      error404: string;
    };
  };
}
