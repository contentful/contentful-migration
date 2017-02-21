import axios from 'axios'
import contentfulManagement from './lib/contentful-management'
module.exports = {
  createClient: function (params) {
    return contentfulManagement(axios, params)
  }
}
