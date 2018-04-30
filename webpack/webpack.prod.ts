const { rootDir } = require('./constants.ts');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common.ts');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const manifestSeed = require('../public/manifest.json');
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

const config = merge(common, {
  output: {
    filename: '[name]-[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new CleanWebpackPlugin(['dist'], {
      root: rootDir,
      verbose: true,
    }),
    new ManifestPlugin({
      seed: manifestSeed,
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(rootDir, 'public/.htaccess'),
      },
    ]),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
});

module.exports = config;
