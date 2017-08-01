/**
 * Snapshot instances
 * @namespace Snapshot
 */

import cloneDeep from 'lodash/cloneDeep'
import { freezeSys, toPlainObject } from 'contentful-sdk-core'
import enhanceWithMethods from '../enhance-with-methods'

/**
 * @memberof Snapshot
 * @typedef Snapshot
 * @prop {Meta.Sys} sys - System metadata
 * @prop {Object<EntryFields.Field>} fields - Object with content for each field
 * @prop {function(): Object} toPlainObject() - Returns this Snapshot as a plain JS object
 */
function createSnapshotApi (http) {
  return {/* In case the snapshot object evolve later */}
}
/**
 * @private
 * @param {Object} http - HTTP client instance
 * @param {Object} data - Raw snapshot data
 * @return {Snapshot} Wrapped snapshot data
 */
export function wrapSnapshot (http, data) {
  const snapshot = toPlainObject(cloneDeep(data))
  enhanceWithMethods(snapshot, createSnapshotApi(http))
  return freezeSys(snapshot)
}

/**
 * @private
 * @param {Object} http - HTTP client instance
 * @param {Object} data - Raw snapshot collection data
 * @return {ApiKeyCollection} Wrapped snapshot collection data
 */
export function wrapSnapshotCollection (http, data) {
  const snapshots = toPlainObject(cloneDeep(data))
  snapshots.items = snapshots.items.map((entity) => wrapSnapshot(http, entity))
  return freezeSys(snapshots)
}
