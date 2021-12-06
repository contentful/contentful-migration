module.exports = {
  extends: '@contentful/backend',
  root: true,
  rules: {
    'max-len': [2, 120, {
      ignoreStrings: true,
      ignoreTemplateLiterals: true
    }]
  }
};
