const path = require('path')

const webpack = require('webpack')
const BabiliPlugin = require('babili-webpack-plugin')
const clone = require('clone')

const PROD = process.env.NODE_ENV === 'production'

const plugins = [
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  })
]

if (PROD) {
  plugins.push(
    new BabiliPlugin()
  )
  plugins.push(
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    })
  )
}

const baseFileName = `contentful-management`
const include = [
  path.resolve(__dirname, 'lib'),
  path.resolve(__dirname, 'test'),
  path.resolve(__dirname, 'node_modules', 'contentful-sdk-core')
]

const baseBundleConfig = {
  context: path.join(__dirname, 'lib'),
  entry: ['./contentful-management.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'contentfulManagement'
  },
  module: {
    loaders: [],
    noParse: (content) => {
      return /clone/.test(content)
    }
  },
  devtool: PROD ? false : 'source-map',
  plugins
}

// Browsers
const browserBundle = clone(baseBundleConfig)
browserBundle.module.loaders = [
  {
    test: /\.js?$/,
    include,
    loader: 'babel-loader',
    options: {
      env: 'browser'
    }
  }
]
browserBundle.output.filename = `${baseFileName}${PROD ? '.min' : ''}.js`

// Legacy browsers like IE11
const legacyInclude = include.slice()
legacyInclude.push(path.resolve(__dirname, 'node_modules', 'follow-redirects')) // follow-redirects uses Object.assign

const legacyBundle = clone(baseBundleConfig)
legacyBundle.module.loaders = [
  {
    test: /\.js?$/,
    include: legacyInclude,
    loader: 'babel-loader',
    options: {
      env: 'legacy'
    }
  }
]
legacyBundle.entry = ['core-js/fn/promise'].concat(legacyBundle.entry) // Promise polyfill
legacyBundle.output.filename = `${baseFileName}.legacy${PROD ? '.min' : ''}.js`

// Node
const nodeBundle = clone(baseBundleConfig)
nodeBundle.module.loaders = [
  {
    test: /\.js?$/,
    include,
    loader: 'babel-loader',
    options: {
      env: 'node'
    }
  }
]
nodeBundle.target = 'node'
nodeBundle.output.libraryTarget = 'commonjs2'
nodeBundle.output.filename = `${baseFileName}.node${PROD ? '.min' : ''}.js`

module.exports = [
  browserBundle,
  legacyBundle,
  nodeBundle
]
