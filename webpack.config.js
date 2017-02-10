var path = require('path')
var webpack = require('webpack')
module.exports = {
  context: __dirname,
  entry: './browser',
  output: {
    path: path.join(__dirname, 'browser-dist'),
    filename: 'contentful-management.js',
    library: 'contentfulManagement'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components|dist)/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.NormalModuleReplacementPlugin(/\.\/vendor-node\/axios/g, './vendor-browser/axios.js'),
    new webpack.EnvironmentPlugin([
      'CONTENTFUL_ACCESS_TOKEN',
      'CONTENTFUL_ORGANIZATION'
    ])
  ]
}
