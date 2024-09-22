const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = (webpackConfigEnv, argv) => {
  const orgName = "maxkalchenko";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "root-config",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    externals: ['single-spa', 'react', 'react-router', /^@maxkalchenko\/.+/],
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: "src/index.ejs",
        templateParameters: {
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
          orgName,
        },
        favicon: "./src/favicon.svg",
      }),
      // TODO: Manage icons
      // new FaviconsWebpackPlugin('src/favicon.svg')
    ],
  });
};
