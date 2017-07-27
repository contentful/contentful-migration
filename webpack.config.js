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
  plugins,
  // Show minimal information, but all errors and warnings
  stats: {
    assets: true,
    cached: false,
    children: false,
    chunks: true,
    chunkModules: true,
    colors: true,
    errors: true,
    errorDetails: true,
    exclude: [],
    hash: false,
    maxModules: 0,
    modules: false,
    moduleTrace: false,
    performance: true,
    providedExports: true,
    publicPath: false,
    reasons: false,
    source: false,
    timings: true,
    usedExports: false,
    version: true,
    warnings: true
  }
}

const defaultBabelLoader = {
  test: /\.js?$/,
  include: [
    path.resolve(__dirname, 'lib'),
    path.resolve(__dirname, 'test'),
    // Inject dependencies which need to be passed to babel since they are not fully ES5 compatible
    path.resolve(__dirname, 'node_modules', 'follow-redirects'), // follow-redirects uses Object.assign
    path.resolve(__dirname, 'node_modules', 'contentful-sdk-core')
  ],
  loader: 'babel-loader',
  options: {}
}

// Browsers
const browserBundle = clone(baseBundleConfig)
browserBundle.module.loaders = [
  Object.assign({}, defaultBabelLoader, {
    options: Object.assign({}, defaultBabelLoader.options, {
      forceEnv: 'browser'
    })
  })
]
browserBundle.output.filename = `${baseFileName}${PROD ? '.min' : ''}.js`

// Legacy browsers like IE11
const legacyBundle = clone(baseBundleConfig)
legacyBundle.module.loaders = [
  Object.assign({}, defaultBabelLoader, {
    options: Object.assign({}, defaultBabelLoader.options, {
      forceEnv: 'legacy'
    })
  })
]
// To be replaced with babel-polyfill with babel-preset-env 2.0:
// https://github.com/babel/babel-preset-env#usebuiltins
// https://github.com/babel/babel-preset-env/pull/241
legacyBundle.entry = [
  'core-js/fn/promise',
  'core-js/fn/object/assign'
].concat(legacyBundle.entry)

legacyBundle.output.filename = `${baseFileName}.legacy${PROD ? '.min' : ''}.js`

// Node
const nodeBundle = clone(baseBundleConfig)
nodeBundle.module.loaders = [
  Object.assign({}, defaultBabelLoader, {
    options: Object.assign({}, defaultBabelLoader.options, {
      forceEnv: 'node'
    })
  })
]
nodeBundle.target = 'node'
nodeBundle.output.libraryTarget = 'commonjs2'
nodeBundle.output.filename = `${baseFileName}.node${PROD ? '.min' : ''}.js`

module.exports = [
  browserBundle,
  legacyBundle,
  nodeBundle
]
