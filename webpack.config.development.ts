const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output: {
    filename: 'app.bundled.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      src: path.resolve(__dirname, 'src'),
      components: path.resolve(__dirname, 'src/components'),
    },
  },
  module: {
    rules: [
      { enforce: 'pre', test: /\.tsx?$/, loader: 'tslint-loader' },
      { test: /\.tsx?$/, loader: 'ts-loader' },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      { test: /\.svg$/, exclude: /node_modules/, loader: 'svg-react-loader' },
      { test: /\.(png|jpg|gif|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, use: 'file-loader' },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader', options: { sourceMap: true } }],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      favicon: path.resolve(__dirname, 'public/favicon.ico'),
    }),
  ],
  devServer: {
    publicPath: '/',
    contentBase: path.resolve(__dirname, 'public'),
    hot: true,
    overlay: true,
    port: 3000,
    inline: true,
    historyApiFallback: true,
  },
};

module.exports = config;
