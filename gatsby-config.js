module.exports = {
  siteMetadata: {
    title: `Bergin Creative`,
    description: `Like minds love design with meaning, creativity, and heart that makes an impact. Let Bergin Creative help with any of your design needs, including identity, print, and web.`,
    siteUrl: `https://www.josephinebergin.com/`,
    socialImage: `/bergin-creative-logo-square.jpg`,
    author: '@JosephineBergin',
  },
  plugins: [
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        url: 'https://admin.josephinebergin.com/graphql/',
        schema: {
          requestConcurrency: 10,
          timeout: 180000,
        },
        type: {
          MediaItem: {
            localFile: {
              requestConcurrency: 1,
              maxFileSizeBytes: 100000000,
            },
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Alfa Slab One:400', 'Poppins:400'],
        },
        custom: {
          families: ['LaTortuga-Regular'],
          urls: ['/fonts/fonts.css'],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bergin Creative`,
        short_name: `Bergin Creative`,
        start_url: `/`,
        background_color: `#73cbd3`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/icon-216x216.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `
        {
          wpPage {
            nodes {
              uri
              modifiedGmt
            }
          }
          allWpWorkDetailPage {
            nodes {
              uri
              modifiedGmt
            }
          }
        }
      `,
        resolveSiteUrl: () => 'https://www.josephinebergin.com/',
        resolvePages: ({
          allSitePage: { nodes: allPages },
          allWpContentNode: { nodes: allWpNodes },
        }) => {
          const wpNodeMap = allWpNodes.reduce((acc, node) => {
            const { uri } = node;
            acc[uri] = node;

            return acc;
          }, {});

          return allPages.map((page) => ({ ...page, ...wpNodeMap[page.path] }));
        },
        serialize: ({ path, modifiedGmt }) => ({
          url: path,
          lastmod: modifiedGmt,
        }),
      },
    },
    {
      resolve: `gatsby-plugin-accessibilityjs`,
      options: {
        injectStyles: false,
        errorClassName: false,
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-tagmanager`,
    //   options: {
    //     id: 'GTM-ID-STRING',
    //     includeInDevelopment: true
    //   }
    // }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
