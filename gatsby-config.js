const config = require('./config');

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
    author: config.author,
    siteUrl: 'https://mm218.dev',
    description: "Data science & modern software development. Posts by Mike Mahoney",
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
      options: { paths: ['ans_key.Rmd'] },
    },
  ],
};
