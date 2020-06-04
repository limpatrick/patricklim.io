const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development';

console.log(`Using environment config: '${activeEnv}'`);

require('dotenv').config({ path: `.env.${activeEnv}` });

const languages = process.env.LANGUAGES.split(',');
const localesPath = `${__dirname}/generated/locales`;

module.exports = {
  siteMetadata: {
    author: `Patrick Lim`,
    email: `contact@patricklim.fr`,
    emailSubject: `patricklim.fr`,
    siteName: `patricklim.fr`,
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Patrick Lim`,
        short_name: `PL`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
        cache_busting_mode: 'none',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          globPatterns: ['**/*'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: 'generated/graphql-types.ts',
        codegenConfig: {
          avoidOptionals: true,
          maybeValue: 'T',
        },
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-typescript-checker',
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitError: false,
          emitWarning: true,
          failOnError: false,
          failOnWarning: false,
        },
      },
    },
    {
      resolve: `intl-yaml-to-json`,
      options: {
        languages,
        sourcePath: `${__dirname}/src/locales`,
        destinationPath: localesPath,
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: localesPath,
        languages,
        defaultLanguage: `en`,
        redirect: true,
      },
    },
    `nprogress`,
  ],
};
