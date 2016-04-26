// To understand why axios is vendored, check SETUP.md
var axios = require('contentful-sdk-core/vendor-browser/axios')
var contentfulManagement = require('./dist/contentful-management').default
module.exports = {
  createClient: function (params) {
    return contentfulManagement(axios, params)
  }
}
