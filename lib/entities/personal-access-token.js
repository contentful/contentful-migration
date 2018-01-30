/**
 * Personal access token
 * @namespace PersonalAccessToken
 * */

import cloneDeep from 'lodash/cloneDeep'
import { freezeSys, toPlainObject } from 'contentful-sdk-core'
import enhanceWithMethods from '../enhance-with-methods'
import errorHandler from '../error-handler'

function createPersonalAccessToken (http) {
  return {
    /**
     * Revokes a personal access token
     * @memberof PersonalAccessToken
     * @func revoke
     * @return {Promise<PersonalAccessToken>} Object the revoked personal access token
     * @example
     * const contentful = require('contentful-management')
     *
     * const client = contentful.createClient({
     *  accessToken: <content_management_api_key>
     * })
     *
     * client.getPersonalAccessToken('<token-id>')
     *  .then((personalAccessToken) => {
     *    return personalAccessToken.revoke()
     *  })
     *  .catch(console.error)
     */
    revoke: function () {
      const baseURL = http.defaults.baseURL.replace('/spaces/', '/users/me/access_tokens')
      return http.put(`${this.sys.id}/revoked`, null, {
        baseURL
      })
        .then((response) => response.data, errorHandler)
    }
  }
}

/**
 * @private
 * @param {Object} http - HTTP client instance
 * @param {Object} data - Raw  personal access token data
 * @return {PersonalAccessToken} Wrapped personal access token
 */
export function wrapPersonalAccessToken (http, data) {
  const personalAccessToken = toPlainObject(cloneDeep(data))
  enhanceWithMethods(personalAccessToken, createPersonalAccessToken(http))
  return freezeSys(personalAccessToken)
}

/**
 * @private
 * @param {Object} http - HTTP client instance
 * @param {Object} data - Raw personal access collection data
 * @return {PersonalAccessTokenCollection} Wrapped personal access token collection data
 */
export function wrapPersonalAccessTokenCollection (http, data) {
  const personalAccessTokens = toPlainObject(cloneDeep(data))
  personalAccessTokens.items = personalAccessTokens.items.map((entity) => wrapPersonalAccessToken(http, entity))
  return freezeSys(personalAccessTokens)
}
