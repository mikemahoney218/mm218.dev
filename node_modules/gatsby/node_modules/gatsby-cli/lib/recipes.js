"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.recipesHandler = recipesHandler;

var _gatsbyTelemetry = require("gatsby-telemetry");

var _gatsbyRecipes = _interopRequireWildcard(require("gatsby-recipes"));

async function recipesHandler(projectRoot, recipe) {
  (0, _gatsbyTelemetry.trackCli)(`RECIPE_RUN`, {
    name: recipe
  });
  const graphql = await (0, _gatsbyRecipes.startGraphQLServer)(projectRoot);
  return (0, _gatsbyRecipes.default)({
    recipe,
    graphqlPort: graphql.port,
    projectRoot
  });
}