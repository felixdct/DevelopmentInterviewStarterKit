'use strict';

require('dotenv').config()
var webpack = require('webpack');
var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, './client/dist');
var APP_DIR = path.resolve(__dirname, './client/src');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'app.js',
    publicPath: '/'
  },
  module: {
    loaders : [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        include: APP_DIR,
        loader: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  plugins: [
    //new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],

  devServer: {
    //hot: true,
    //hotOnly: true,
    // allowedHosts: ['localhost'],
    host: 'localhost',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    contentBase: BUILD_DIR,
    historyApiFallback: true,
    port: 3000
  }
};

module.exports = config;
