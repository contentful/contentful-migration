var axios = require('axios')
var contentfulManagement = require('./dist/contentful-management').default

module.exports = {
  createClient: function (params) {
    return contentfulManagement(axios, params)
  }
}
