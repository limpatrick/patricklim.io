const { rootDir } = require('./constants.ts');
const common = require('./webpack.common.ts');
const merge = require('webpack-merge');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = merge(common, {
  output: {
    filename: 'app.bundled.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader', options: { sourceMap: true } }],
      },
    ],
  },
  devServer: {
    publicPath: '/',
    contentBase: path.resolve(rootDir, 'public'),
    hot: true,
    overlay: true,
    port: 3000,
    inline: true,
    historyApiFallback: true,
  },
});

module.exports = config;
