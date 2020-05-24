import { graphql, useStaticQuery } from 'gatsby';

type Props = Readonly<{
  site: Partial<{
    siteMetadata: SiteMetadata;
  }>;
}>;

type SiteMetadata =
  | Readonly<
      Partial<{
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
      }>
    >
  | undefined;

/**
 * ex. const {siteTitle, siteUrl} = useSiteMetadata();
 */
export default (): SiteMetadata => {
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
