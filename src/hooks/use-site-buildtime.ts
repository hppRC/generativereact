import { graphql, useStaticQuery } from 'gatsby';

type UseSiteBuildtime = {
  site: {
    buildTime: string;
  };
};

export default () => {
  const { site } = useStaticQuery<UseSiteBuildtime>(graphql`
    query {
      site {
        buildTime(formatString: "YYYY-MM-DD")
      }
    }
  `);

  return site.buildTime;
};
