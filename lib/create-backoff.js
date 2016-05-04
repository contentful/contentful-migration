import promisedWait from './promised-wait'

/**
 * Returns a wrapper method which waits a given amount of time before calling
 * wrapped method.
 * If the call to the wrapped method fails, retries `maxRetries` times, and if
 * all those fail, it returns a rejected promise.
 * @private
 * @param {number} maxRetries - max number of retries before aborting
 */
export default function createBackoff (maxRetries) {
  let attempt = 0
  return function maybeRetry (error, retry) {
    if (attempt < maxRetries) {
      return promisedWait(Math.pow(2, attempt++) * 1000).then(retry)
    } else {
      return Promise.reject(error)
    }
  }
}
