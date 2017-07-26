// About this file:
// Babel 7 introduces .babelrc.js files. The .babelrc file can me removed when Babel 7 is released. (https://github.com/babel/babel/pull/4892)

const defaultEnvConfig = {
  // No module transformation, webpack will take care of this if necessary.
  'modules': false
}

// Latest browsers
const browserEnvConfig = Object.assign({}, defaultEnvConfig, {
  'targets': {
    'browsers': [
      'last 2 versions',
      'not ie < 13',
      'not android < 50'
    ]
  }
})

// Legacy browsers
const legacyEnvConfig = Object.assign({}, defaultEnvConfig, {
  'targets': {
    'browsers': [
      'last 5 versions',
      'not ie < 10'
    ]
  }
})

// Node
const nodeEnvConfig = Object.assign({}, defaultEnvConfig, {
  'targets': {
    'node': '4.7'
  }
})

// Combined for tests & es6 modules version
const fullEnvConfig = Object.assign({}, defaultEnvConfig, {
  'targets': Object.assign(legacyEnvConfig.targets, nodeEnvConfig.targets)
})

module.exports = {
  'plugins': [
    'transform-object-rest-spread'
  ],
  'env': {
    'browser': {
      'presets': [
        ['env', browserEnvConfig]
      ]
    },
    'legacy': {
      'presets': [
        ['env', legacyEnvConfig]
      ]
    },
    'node': {
      'presets': [
        ['env', nodeEnvConfig]
      ]
    },
    'test': {
      'presets': [
        ['env', fullEnvConfig]
      ],
      'plugins': [
        'rewire'
      ]
    }
  }
}
