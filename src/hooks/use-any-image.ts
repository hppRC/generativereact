import { graphql, useStaticQuery } from 'gatsby';
import { FluidObject } from 'gatsby-image';

type UseAnyImage = {
  allFile: Partial<{
    nodes: {
      relativePath: string;
      childImageSharp?: {
        fluid?: FluidObject;
      };
    }[];
  }>;
};

const useAnyImage = (filename: string): FluidObject | undefined => {
  // relativePath: path from `image`
  // it is configured in gatsby-config.js of `gatsby-source-filesystem`
  const { allFile } = useStaticQuery<UseAnyImage>(graphql`
    query {
      allFile {
        nodes {
          relativePath
          childImageSharp {
            fluid(maxWidth: 1400, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `);

  const targetImage = allFile.nodes?.find(({ relativePath }) => relativePath.includes(filename));

  return targetImage?.childImageSharp?.fluid;
};

export default useAnyImage;
