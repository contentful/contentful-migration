/**
 * @namespace User
 */

import { freezeSys, toPlainObject } from 'contentful-sdk-core'
import enhanceWithMethods from '../enhance-with-methods'
import cloneDeep from 'lodash/cloneDeep'
/**
 * @memberof User
 * @typedef User
 * @prop {Object} sys - System metadata
 * @prop {string} sys.id - User id
 * @prop {string} sys.type - Entity type
 * @prop {string} firstName - User first name
 * @prop {string} lastName - User last name
 * @prop {string} avatarUrl - User avatar url
 * @prop {string} email - User email
 * @prop {boolean} activated - User activated
 * @prop {number} signInCount - User sign in count
 * @prop {boolean} confirmed - User confirmed
 * @prop {function(): Object} toPlainObject() - Returns this User as a plain JS object
 */

/**
 * @memberof User
 * @typedef UserCollection
 * @prop {number} total
 * @prop {number} limit
 * @prop {number} skip
 * @prop {Object<{type: "Array"}>} sys
 * @prop {Array<User.User>} items
 * @prop {function(): Object} toPlainObject() - Returns the collection as a plain JS object
 */

/*
 *
 * @private
 * */
export function wrapUser (http, data) {
  const user = toPlainObject(cloneDeep(data))
  enhanceWithMethods(user, {})
  return freezeSys(user)
}

/**
 * @private
 * @param {Object} http - HTTP client instance
 * @param {Object} data - Raw data collection
 * @return {User.UserCollection} Normalized usage collection
 */
export function wrapUserCollection (http, data) {
  const users = toPlainObject(cloneDeep(data))
  users.items = users.items.map(entity => wrapUser(http, entity))
  return freezeSys(users)
}
