const netlifyConstants = require('./netlify/constants');
const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development';
const envs = [
  'CONTEXT',
  'URL',
  'DEPLOY_URL',
  'DEPLOY_PRIME_URL',
  'NODE_ENV',
  'PL_AWS_ACESS_KEY_ID',
  'PL_AWS_REGION',
  'PL_AWS_SECRET_ACCESS_KEY',
  'PL_EMAIL_SERVICE',
  'PL_EMAIL_SUBJECT',
  'PL_EMAIL_TO',
  'PL_LANGUAGES',
  'PL_SITE_URL',
];

console.log(`Using environment config: '${activeEnv}'`);
console.log(`\nNetlify envs:`);
for (const env of envs) console.log(`${env}=${process.env[env]}`);
console.log(`\nNetlify constants:`);
for (const key in netlifyConstants) console.log(`${key}=${netlifyConstants[key]}`);

const languages = process.env.PL_LANGUAGES.split(',');
const localesPath = `${__dirname}/generated/locales`;

module.exports = {
  siteMetadata: {
    author: `Patrick Lim`,
    email: process.env.PL_EMAIL_TO,
    emailSubject: process.env.PL_EMAIL_SUBJECT,
    languages,
    siteName: `patricklim.fr`,
    siteUrl: netlifyConstants.SITE_URL,
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `technologies`,
        path: `${__dirname}/src/images/technologies`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-yaml`,
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
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => netlifyConstants.NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*' }],
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [
          `/dev-404-page`,
          `/*/dev-404-page`,
          `/offline-plugin-app-shell-fallback`,
          `/*/offline-plugin-app-shell-fallback`,
          `/404`,
          `/*/404`,
          `/404.html`,
          `/*/404.html`,
        ],
      },
    },
  ],
};
