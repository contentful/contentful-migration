import reduce from 'lodash/reduce'

/**
 * This method enhances a base object which would normally contain data, with
 * methods from another object that might work on manipulating that data.
 * All the added methods are set as non enumerable, non configurable, and non
 * writable properties. This ensures that if we try to clone or stringify the
 * base object, we don't have to worry about these additional methods.
 * @private
 * @param {object} baseObject - Base object with data
 * @param {object} methodsObject - Object with methods as properties. The key
 * values used here will be the same that will be defined on the baseObject.
 */
export default function enhanceWithMethods (baseObject, methodsObject) {
  return reduce(methodsObject, (baseObject, method, methodName) => {
    Object.defineProperty(baseObject, methodName, {
      enumerable: false,
      configurable: false,
      writable: false,
      value: method
    })
    return baseObject
  }, baseObject)
}
