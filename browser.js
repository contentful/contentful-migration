// To understand why axios is vendored, check SETUP.md
import axios from 'contentful-sdk-core/vendor-browser/axios'
import contentfulManagement from './lib/contentful-management'
module.exports = {
  createClient: function (params) {
    return contentfulManagement(axios, params)
  }
}
