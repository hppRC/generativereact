const siteTitle = `Generative React`;
const siteUrl = `https://generative-react.hpprc.com`;
const siteDescription = `Generative React - some experiments about generative arts and WebGL with React and Gatsby`;

const siteMetadata = {
  siteTitle,
  siteTitleAlt: `Generative React - @hppRC/generativereact`,
  siteHeadline: `Generative React - Experiments about generative arts with React from @hppRC`,
  siteUrl,
  siteDescription,
  siteLanguage: `ja`,
  author: `@hpp_ricecake`, // twitter account id
  basePath: `/`,
};

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-glslify`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/assets`,
      },
    },
    {
      resolve: `@hpprc/gatsby-theme-core`,
      options: {
        siteTitle,
        siteUrl,
        siteDescription,
        iconPath: `./assets/icon.png`,
        googleAnalyticsTrackingId: `UA-149661454-3`,
      },
    },
  ],
};
