import promisedWait from './promised-wait'

/**
 * Promise-based rate limiting of a function. Assumes that the passed in
 * function will return a Promise.
 * Queues calls made to the wrapped function, and if more calls are made than
 * the allowed level of concurrency waits until a certain amount of time has
 * passed before continuing to clear calls from the queue.
 * @private
 * @param {Function} fn - call to be rate limited
 * @param {number} concurrency - Number of allowed concurrent requests
 * @param {number} delay - Delay in milliseconds for waiting after hitting the
 */
export default function rateLimit (fn, concurrency, delay) {
  concurrency = positiveInteger('concurrency', concurrency)
  delay = positiveInteger('delay', delay)

  const callQueue = []
  let inFlight = 0

  function shift () {
    if (inFlight >= concurrency) {
      return
    }

    const start = new Date().getTime()

    if (callQueue.length) {
      const call = callQueue.shift()
      inFlight++

      let result
      try {
        // call the wrapped method
        const tmp = Promise.resolve(fn.apply(call.self, call.args))
        // resolve the call with a possibly rejected promise
        call.resolve(tmp)
        // rate-limiting doesn't care about errors
        result = tmp.catch(() => {})
      } catch (err) {
        call.reject(err)
        result = Promise.resolve()
      }

      // If this request completed faster than our rate-limit would
      // allow, wait the appropriate amount of time before marking the
      // request as finished.
      result.then(maybeWait).then(goToNextCall)
    }

    function maybeWait () {
      const duration = start - new Date().getTime()
      if (duration < delay) {
        return promisedWait(delay - duration)
      }
    }
  }

  function goToNextCall () {
    inFlight--
    shift()
  }

  return function (/* wrapped method arguments */) {
    const self = this
    const args = Array.prototype.slice.call(arguments)
    return new Promise((resolve, reject) => {
      callQueue.push({
        reject: reject,
        resolve: resolve,
        self: self,
        args: args
      })
      shift()
    })
  }
}

function positiveInteger (name, value) {
  value = parseInt(value, 10)
  if (isNaN(value) || value < 1) {
    throw new TypeError(name + ' must be a positive integer')
  }
  return value
}
