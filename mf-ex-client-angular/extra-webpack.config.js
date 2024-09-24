const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

  // Modify the output configuration
  singleSpaWebpackConfig.output.libraryTarget = 'system';

  // Set up externals
  singleSpaWebpackConfig.externals = {
    '@maxkalchenko/utils': '@maxkalchenko/utils', // Mark as external
    ...singleSpaWebpackConfig.externals, // Preserve other externals
  };

  return singleSpaWebpackConfig;
};
