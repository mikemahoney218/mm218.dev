# gatsby-remark-numbered-footnotes

This is a plugin for [`gatsby-transformer-remark`](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-transformer-remark) that converts footnote reference links to sequential numbers.

It’s a lightweight wrapper around `remark-numbered-footnotes` to make it work with Gatsby.

## Installation

```bash
yarn add gatsby-remark-numbered-footnotes
```

In `gatsby-config.js`, add:

```diff
  module.exports = {
    plugins: [
      {
        resolve: 'gatsby-transformer-remark',
        options: {
+         plugins: [
+           'gatsby-remark-numbered-footnotes',
+         ],
        },
      },
    ],
  };
```

## Example Output

In [Remark](https://remark.js.org/), it’s possible to add footnotes in Markdown like this:

```md
This is normal body copy.[^also] It includes a couple footnotes.[^thing]

[^also]:
  This is a footnote.

[^thing]:
  This is another footnote.
```

By default, this will generate the following HTML:

```html
<p>
  This is normal body copy.
  <sup id="fnref-also">
    <a href="#fn-also" class="footnote-ref">also</a>
  </sup>
  It includes a couple footnotes.
  <sup id="fnref-thing">
    <a href="#fn-thing" class="footnote-ref">thing</a>
  </sup>
</p>
<div class="footnotes">
  <hr>
  <ol>
    <li id="fn-also">
      <p>This is a footnote.</p>
      <a href="#fnref-also" class="footnote-backref">↩</a>
    </li>
    <li id="fn-thing">
      <p>This is another footnote.</p>
      <a href="#fnref-thing" class="footnote-backref">↩</a>
    </li>
  </ol>
</div>
```

With `gatsby-remark-numbered-footnotes`, the markup will change to:

```diff
  <p>
    This is normal body copy.
-   <sup id="fnref-also">
+   <sup id="fnref-1">
-     <a href="#fn-also" class="footnote-ref">also</a>
+     <a href="#fn-1" class="footnote-ref">1</a>
    </sup>
    It includes a couple footnotes.
-   <sup id="fnref-thing">
+   <sup id="fnref-2">
-     <a href="#fn-thing" class="footnote-ref">thing</a>
+     <a href="#fn-2" class="footnote-ref">2</a>
    </sup>
  </p>
  <div class="footnotes">
    <hr>
    <ol>
-     <li id="fn-also">
+     <li id="fn-1">
        <p>This is a footnote.</p>
-       <a href="#fnref-also" class="footnote-backref">↩</a>
+       <a href="#fnref-1" class="footnote-backref">↩</a>
      </li>
-     <li id="fn-thing">
+     <li id="fn-2">
        <p>This is another footnote.</p>
-       <a href="#fnref-thing" class="footnote-backref">↩</a>
+       <a href="#fnref-2" class="footnote-backref">↩</a>
      </li>
    </ol>
  </div>
```
