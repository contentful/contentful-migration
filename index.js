// To understand why axios is vendored, check SETUP.md
var axios = require('axios')
var contentfulManagement
try {
  contentfulManagement = require('./dist/contentful-management').default
} catch (err) {
  if (err.code === 'MODULE_NOT_FOUND') {
    require('babel-register')
    contentfulManagement = require('./lib/contentful-management').default
  } else {
    console.log(err)
    process.exit(1)
  }
}
module.exports = {
  createClient: function (params) {
    return contentfulManagement(axios, params)
  }
}
