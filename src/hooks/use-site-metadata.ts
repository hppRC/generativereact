import { graphql, useStaticQuery } from 'gatsby';

export type Props = {
  site: {
    siteMetadata: Partial<{
      siteTitle: string;
      siteTitleAlt: string;
      siteHeadline: string;
      siteUrl: string;
      siteDescription: string;
      siteLanguage: string;
      author: string;
      social: Partial<{
        twitter: string;
        github: string;
        qiita: string;
      }>;
    }>;
  };
};

/**
 * ex. const {siteTitle, siteUrl} = useSiteMetadata();
 */
export const useSiteMetadata = () => {
  const data = useStaticQuery<Props>(graphql`
    query {
      site {
        siteMetadata {
          siteTitle
          siteTitleAlt
          siteHeadline
          siteUrl
          siteDescription
          siteLanguage
          author
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default useSiteMetadata;
