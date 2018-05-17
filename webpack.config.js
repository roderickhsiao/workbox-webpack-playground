const { InjectManifest } = require('workbox-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app-bundle.js'
  },
  module: {
    rules: [{ test: /\.js$/, use: 'babel-loader' }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Workbox Playground'
    }),
    new InjectManifest({
      swSrc: './src/sw.js'
    })
  ]
};
