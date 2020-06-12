const multimatch = require('multimatch');

exports.onCreatePage = ({ page, actions, reporter }, options) => {
  const { deletePage } = actions;

  /** @type {Array.<string>} */
  const patterns = options.paths; // this sounds counter-intuitive, but for the end-user `paths` makes the most sense

  if (
    !patterns ||
    !Array.isArray(patterns) ||
    !patterns.every(pattern => typeof pattern === 'string')
  ) {
    reporter.panic(
      `
      "paths" is a required option for gatsby-plugin-exclude, and must be an array of strings.
      See docs here - https://github.com/harryparkdotio/gatsby-plugin-exclude
      `
    );
  }

  const exclusions = multimatch([page.path], patterns);

  if (exclusions.length > 0) {
    deletePage(page);
  }
};
