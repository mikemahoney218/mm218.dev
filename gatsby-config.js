const config = require('./config');

module.exports = {
  pathPrefix: config.pathPrefix,
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        start_url: config.pathPrefix || config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
        icon: config.manifestIcon, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-theme-resume',
    {
      resolve: `gatsby-theme-medium`,
      options: {
        // basePath defaults to `/`
        basePath: `/blog`,
      },
    },
    {
      resolve: 'gatsby-plugin-exclude',
      options: { paths: ['ans_key.Rmd', '/content/posts/2020/06/beaver-foreco.md'] },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/portfolio`,
        name: `portfolio`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 970,
            },
          },
          `gatsby-remark-prismjs`,
          "@weknow/gatsby-remark-twitter",
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
 //   {
  //    resolve: `gatsby-plugin-google-analytics`,
    //  options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      //},
//    },
    `gatsby-plugin-feed`,
  ],
  siteMetadata: {
    title: config.siteTitle,
    author: config.author,
    siteUrl: 'https://mm218.dev',
    description: "Mike Mahoney's personal webpage. Maps, data, and the world around us.",
    social: [
      {
        name: 'Github',
        url: 'https://github.com/mikemahoney218',
      },
      {
        name: 'Linkedin',
        url: 'https://linkedin.com/in/mikemahoney218/',
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/mikemahoney218',
      },
    ]
  },
};
