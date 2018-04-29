const { rootDir } = require('./constants.ts');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
  entry: path.resolve(rootDir, 'src/index.tsx'),
  output: {
    publicPath: '/',
    path: path.resolve(rootDir, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      src: path.resolve(rootDir, 'src'),
      components: path.resolve(rootDir, 'src/components'),
    },
  },
  module: {
    rules: [
      { enforce: 'pre', test: /\.tsx?$/, loader: 'tslint-loader' },
      { test: /\.tsx?$/, loader: 'ts-loader' },
      { test: /\.svg$/, exclude: /node_modules/, loader: 'svg-react-loader' },
      {
        test: /\.(png|jpg|gif|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets'
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(rootDir, 'public/index.html'),
      favicon: path.resolve(rootDir, 'public/favicon.ico'),
    }),
  ],
};

module.exports = config;
