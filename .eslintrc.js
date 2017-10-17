module.exports = {
  extends: '@contentful/backend',
  parser: 'typescript-eslint-parser',
  plugins: ['typescript'],
  root: true,
  rules: {
    "max-len": [2, 120, {
      ignoreStrings: true,
      ignoreTemplateLiterals: true
    }]
  }
};
