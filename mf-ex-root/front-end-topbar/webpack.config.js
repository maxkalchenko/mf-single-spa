const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react-ts');
// const StandaloneSingleSpaPlugin = require('standalone-single-spa-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'maxkalchenko',
    projectName: 'top-bar',
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    externals: ['react', 'react-router', /^@maxkalchenko\/.+/],
    // devServer: {
    //   // Not required, but it's often useful to run webpack-dev-server in SPA mode
    //   historyApiFallback: true
    // },
    // plugins: [
    //   // the standalone plugin works in conjunction with HtmlWebpackPlugin
    //   new HtmlWebpackPlugin(),
  
    //   new StandaloneSingleSpaPlugin({
    //     // required
    //     appOrParcelName: 'top-bar',
    //   })
    // ]
  });
};
