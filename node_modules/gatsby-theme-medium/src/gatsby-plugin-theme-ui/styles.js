export default {
  root: {
    fontFamily: `body`,
    fontSize: 1
  },
  h1: {
    fontSize: 4,
    marginTop: 3
  },
  h2: {
    fontSize: 3,
    fontFamily: `secondaryHeading`,
    lineHeight: `secondaryHeading`,
    letterSpacing: `secondaryHeading`,
    fontWeight: 700,
    padding: 0,
    marginTop: 4
  },
  h3: {
    fontSize: 2,
    fontFamily: `secondaryHeading`
  },
  h4: {
    fontSize: 1,
    fontFamily: `secondaryHeading`
  },
  h5: {
    fontSize: 1,
    fontFamily: `secondaryHeading`
  },
  h6: {
    fontSize: 1,
    fontFamily: `secondaryHeading`
  },
  pre: {
    variant: `prism`,
    fontFamily: `monospace`,
    tabSize: 4,
    hyphens: `none`,
    marginBottom: 0,
    color: `white`,
    bg: `prism.background`,
    overflow: `auto`,
    borderRadius: 10,
    p: 3
  },
  code: {
    fontFamily: `monospace`,
    // from typography overrideThemeStyles
    // "h1 code, h2 code, h3 code, h4 code, h5 code, h6 code"
    fontSize: 0
  },
  inlineCode: {
    borderRadius: `0.3em`,
    color: `secondary`,
    bg: `highlight`,
    paddingTop: `0.15em`,
    paddingBottom: `0.05em`,
    paddingX: `0.2em`
  },
  // from typography overrideThemeStyles
  a: {
    color: `primary`
  },
  hr: {
    borderColor: `muted`
  },
  p: {
    code: {
      fontSize: `inherit`
    }
  },
  li: {
    code: {
      fontSize: `inherit`
    }
  },
  blockquote: {
    color: `inherit`,
    borderLeftColor: `inherit`,
    opacity: 0.8,
    "&.translation": {
      fontSize: `1em`
    }
  }
};
