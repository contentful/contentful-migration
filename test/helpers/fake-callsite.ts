const fakeCallsite = function ({ line = 1 } = {}) {
  return {
    getFileName: () => '/tmp/fake/migration.js',
    getLineNumber: () => line
  }
}

export default fakeCallsite
