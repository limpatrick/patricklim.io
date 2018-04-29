const { rootDir } = require('./constants.ts');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common.ts');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const manifestSeed = require('../public/manifest.json');

const config = merge(common, {
  output: {
    filename: '[name].[hash].js',
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
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
});

module.exports = config;
