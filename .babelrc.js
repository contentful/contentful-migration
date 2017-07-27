// About this file:
// Babel 7 introduces .babelrc.js files. The .babelrc file can me removed when Babel 7 is released. (https://github.com/babel/babel/pull/4892)

// Babel 7 will also remove the 'env' option --> https://github.com/babel/babel/issues/4539#issuecomment-284870486
const env = process.env.BABEL_ENV || process.env.NODE_ENV

const defaultBabelPresetEnvConfig = {
  // No module transformation, webpack will take care of this if necessary.
  'modules': false
}

// Latest browsers
const browserBabelPresetEnvConfig = Object.assign({}, defaultBabelPresetEnvConfig, {
  'targets': {
    'browsers': [
      'last 2 versions',
      'not ie < 13',
      'not android < 50'
    ]
  }
})

// Legacy browsers
const legacyBabelPresetEnvConfig = Object.assign({}, defaultBabelPresetEnvConfig, {
  'targets': {
    'browsers': [
      'last 5 versions',
      'not ie < 10'
    ]
  }
})

// Node
const nodeBabelPresetEnvConfig = Object.assign({}, defaultBabelPresetEnvConfig, {
  'targets': {
    'node': '4.7'
  }
})

// Combined node and browser environment for es6 modules version and tests
const modulesBabelPresetEnvConfig = Object.assign({}, defaultBabelPresetEnvConfig, {
  'targets': Object.assign(legacyBabelPresetEnvConfig.targets, nodeBabelPresetEnvConfig.targets)
})

const testBabelPresetEnvConfig = Object.assign({}, modulesBabelPresetEnvConfig, {
  // Tests need to transform modules
  'modules': 'commonjs'
})

const plugins = [
  'transform-object-rest-spread',
  ['inline-replace-variables', {
    // Inject version number into code
    '__VERSION__': require('./package.json').version
  }]
]

let babelConfig = {
  plugins
}

if (env === 'browser') {
  babelConfig = Object.assign(babelConfig, {
    'presets': [
      ['env', browserBabelPresetEnvConfig]
    ]
  })
}

if (env === 'legacy') {
  babelConfig = Object.assign(babelConfig, {
    'presets': [
      ['env', legacyBabelPresetEnvConfig]
    ]
  })
}

if (env === 'modules') {
  babelConfig = Object.assign(babelConfig, {
    'presets': [
      ['env', modulesBabelPresetEnvConfig]
    ]
  })
}

if (env === 'node') {
  babelConfig = Object.assign(babelConfig, {
    'presets': [
      ['env', nodeBabelPresetEnvConfig]
    ]
  })
}

if (env === 'test') {
  babelConfig = Object.assign(babelConfig, {
    'presets': [
      ['env', testBabelPresetEnvConfig]
    ],
    'plugins': babelConfig.plugins.concat([
      'rewire'
    ])
  })
}

module.exports = babelConfig
