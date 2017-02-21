'use strict'
var webpack = require('webpack')
var path = require('path')
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
var plugins = [
  new LodashModuleReplacementPlugin(),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  })
]

if (process.env.NODE_ENV === 'production') {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      }
    })
  )
}

module.exports = {
  context: path.join(__dirname, 'lib'),
  entry: './contentful-management.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'contentful-management.js',
    libraryTarget: 'umd',
    library: 'contentful-management'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components|dist)/,
        loader: 'babel-loader'
      },
      {
        test: /\.json?$/,
        loader: 'json'
      }
    ]
  },
  plugins: plugins
}
