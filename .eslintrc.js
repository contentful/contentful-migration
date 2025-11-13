module.exports = {
  extends: ['prettier'],
  root: true,
  rules: {
    'max-len': [
      2,
      120,
      {
        ignoreStrings: true,
        ignoreTemplateLiterals: true
      }
    ]
  }
}
