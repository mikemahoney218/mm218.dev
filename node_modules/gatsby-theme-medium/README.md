<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby Theme Medium
</h1>

When you like the style, but not the company.

## Installation

```sh
npm install --save gatsby-theme-medium
```

## Usage

### Theme options

| Key           | Default value    | Description                                                                                               |
| ------------- | ---------------- | --------------------------------------------------------------------------------------------------------- |
| `basePath`    | `/`              | Root url for all blog posts                                                                               |
| `contentPath` | `content/posts`  | Location of blog posts                                                                                    |
| `assetPath`   | `content/assets` | Location of assets                                                                                        |
| `mdx`         | `true`           | Configure `gatsby-plugin-mdx` (if your website already is using the plugin pass `false` to turn this off) |

#### Example usage

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-medium`,
      options: {
        // basePath defaults to `/`
        basePath: `/blog`
      }
    }
  ]
};
```

### Additional configuration

In addition to the theme options, there are a handful of items you can customize via the `siteMetadata` object in your site's `gatsby-config.js`

```js
// gatsby-config.js
module.exports = {
  siteMetadata: {
    // Used for the site title and SEO
    title: `My Blog Title`,
    // Used to provide alt text for your avatar
    author: `My Name`,
    // Used for SEO
    description: `My site description...`,
    // Used for social links in the root footer
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/gatsbyjs`
      },
      {
        name: `GitHub`,
        url: `https://github.com/gatsbyjs`
      }
    ]
  }
};
```
