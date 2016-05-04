import {reduce} from 'lodash/collection'
import {cloneDeep} from 'lodash/lang'
import rateLimit from './rate-limit'
import createBackoff from './create-backoff'

/**
 * Wraps the http client with a rate limiter, and a backoff functionality.
 * The rate limiter queues calls and attempts to prevent the server side rate
 * limit from ever being hit.
 * The backoff is triggered if a 429 Too Many Requests error is received from
 * the server, and every time if it is received repeateadly the wait time
 * for the next try will increase exponentially.
 * @private
 * @param {Object} http - HTTP Client instances
 * @param {Object} options - Options for the wrapper methods
 * @prop {number} concurrency - Number of allowed concurrent requests
 * @prop {number} delay - Delay in milliseconds for waiting after hitting the
 * allowed number of concurrent requests
 * @prop {number} maxRetries - Maximum number of retries when a 429 is received
 * @prop {boolean} retryOnTooManyRequests - If we should retry on 429s
 */
export default function wrapHttpClient (http, {concurrency, delay, maxRetries, retryOnTooManyRequests}) {
  return reduce(
    ['get', 'post', 'put', 'delete', 'patch', 'head'],
    (http, methodName) => {
      let httpCall = http[methodName].bind(http)
      if (retryOnTooManyRequests) {
        httpCall = maybeBackoff(httpCall, maxRetries)
      }
      http[methodName] = rateLimit(httpCall, concurrency, delay)
      return http
    },
    cloneDeep(http)
  )
}

function maybeBackoff (fn, maxRetries) {
  return function httpCall () {
    const self = this
    self.backoff = self.backoff || createBackoff(maxRetries)
    const args = Array.prototype.slice.call(arguments)
    let response = fn.apply(self, args)

    response = response.catch(function (error) {
      // Rate-limited by the server, maybe backoff and retry
      if (error.status === 429) {
        return self.backoff(error, function () {
          return httpCall.apply(self, args)
        })
      }
      throw error
    })

    return response
  }
}
