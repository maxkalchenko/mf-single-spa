/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react-ts');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'maxkalchenko',
    projectName: 'mf-ex-client-react',
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    devServer: {
      proxy: {
        '/api/react': {
          target: 'http://localhost:3000',
          router: () => 'http://localhost:5005',
          logLevel: 'debug' /*optional*/,
        },
      },
    },
  });
};
