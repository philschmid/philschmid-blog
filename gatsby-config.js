require('dotenv').config();

const siteMetadata = {
  title: `Blog by Philipp Schmid`,
  name: `philschmid`,
  siteUrl: `https://www.philschmid.de`,
  description: `Blog about Machine Learning, Cloud, AWS, GCP, helping People, Code, Share, be helpful`,
  hero: {
    heading: `Articles about Machine Learning and Cloud`,
    subheading: `think, code and share`,
    maxWidth: 652,
  },
  social: [
    {
      url: `https://twitter.com/_philschmid`,
    },
    {
      url: `https://github.com/philschmid`,
    },
    {
      url: `https://instagram.com/schmid_philipp`,
    },
    {
      url: `https://www.linkedin.com/in/philipp-schmid-a6a2bb196/`,
    },
  ],
};

const plugins = [
  {
    resolve: require.resolve(`./@narative/gatsby-theme-novela`),
    options: {
      contentPosts: 'content/posts',
      contentAuthors: 'content/authors',
      rootPath: '/',
      basePath: '/',
      authorsPage: true,
      mailchimp: true,
      sources: {
        local: true,
        contentful: false,
      },
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Blog by Philipp Schmid`,
      short_name: `philschmid`,
      start_url: `/`,
      background_color: `#fff`,
      theme_color: `#fff`,
      display: `standalone`,
      icon: `src/assets/favicon.png`,
    },
  },
  {
    resolve: 'gatsby-plugin-mailchimp',
    options: {
      endpoint:
        'https://philschmid.us19.list-manage.com/subscribe/post?u=9dbbfdd84e34132c1147d9db9&amp;id=a10a54e23e',
    },
  },
  `gatsby-plugin-sitemap`,
  {
    resolve: 'gatsby-plugin-robots-txt',
    options: {
      host: 'https://www.philschmid.de',
      sitemap: 'https://www.philschmid.de/sitemap.xml',
      policy: [{userAgent: '*', allow: '/'}],
    },
  },
];

/**
 * For development purposes if there's no Contentful Space ID and Access Token
 * set we don't want to add in gatsby-source-contentful because it will throw
 * an error.
 *
 * To enanble Contentful you must
 * 1. Create a new Space on contentful.com
 * 2. Import the Contentful Model from @narative/gatsby-theme-novela/conteful
 * 3. Add .env to www/ (see www/env.example)
 * 4. Enable contentful as a source in this file for @narative/gatsby-theme-novela
 */
// if (process.env.CONTENTFUL_SPACE_ID && process.env.CONTENTFUL_ACCESS_TOKEN) {
//   plugins.push({
//     resolve: 'gatsby-source-contentful',
//     options: {
//       spaceId: process.env.CONTENTFUL_SPACE_ID,
//       accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
//     },
// });
// }

module.exports = {
  siteMetadata,
  plugins,
};
