# gatsby-plugin-exclude

exclude pages from gatsby

[![Travis](https://img.shields.io/travis/com/harryparkdotio/gatsby-plugin-exclude/master.svg?style=for-the-badge)](https://travis-ci.com/harryparkdotio/gatsby-plugin-exclude)
[![Codecov](https://img.shields.io/codecov/c/github/harryparkdotio/gatsby-plugin-exclude/master.svg?style=for-the-badge)](https://codecov.io/gh/harryparkdotio/gatsby-plugin-exclude)
[![license](https://img.shields.io/github/license/harryparkdotio/gatsby-plugin-exclude.svg?style=for-the-badge)](https://github.com/harryparkdotio/gatsby-plugin-exclude/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/gatsby-plugin-exclude.svg?style=for-the-badge)](https://www.npmjs.com/package/gatsby-plugin-exclude)

## usage

### install

```bash
$ npm install --save gatsby-plugin-exclude
```

### configure

`gatsby-config.js`

```js
{
  resolve: 'gatsby-plugin-exclude',
  options: { paths: ['/app/**', '!/app/demo/*'] },
}
```

In this example, all paths prefixed by `/app/` will be excluded, **except for `app/demo/`**.

---

Note: [multimatch](https://github.com/sindresorhus/multimatch) specifies `*` matches any number of characters, but not `/`, whereas `**` does.

therefore to match `/abc/123/xyz`, `/abc/**` is the appropriate pattern, not `/abc/*`.

---

> based on [gatsby-plugin-create-client-paths](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-create-client-paths)
