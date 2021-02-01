const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
/* Import copy-webpack-plugin */
const CopyWebpackPlugin = require('copy-webpack-plugin');

exports.loaderOptions = new webpack.LoaderOptionsPlugin({
  options: {
    context: __dirname,
  },
});

exports.environmentVariables = new webpack.DefinePlugin({
  'process.env': {
    'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
});

exports.uglifyJs = new webpack.optimize.UglifyJsPlugin({
  output: {
    comments: false,
  },
  compress: {
    warnings: false,
    drop_console: true,
  },
});

exports.extractText = (() => {
  const config = {
    filename:  'style.css',
  };
  return new ExtractTextPlugin(config);
})();

exports.manifest = new ManifestPlugin({
  fileName: 'asset-manifest.json',
});

exports.sw = new SWPrecacheWebpackPlugin({
  dontCacheBustUrlsMatching: /\.\w{8}\./,
  filename: 'service-worker.js',
  logger(message) {
    if (message.indexOf('Total precache size is') === 0) {
      return;
    }
    console.log(message);
  },
  minify: true,
  navigateFallback: '/index.html',
  staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
});
// Export copy-webpack-plugin instance
exports.copy = new CopyWebpackPlugin([
  { from: 'src/pwa' }, // define the path of the files to be copied
]);
