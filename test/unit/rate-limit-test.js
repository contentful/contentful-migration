import test from 'tape'

import rateLimit from '../../lib/rate-limit'
import promisedWait from '../../lib/promised-wait'
const wait = promisedWait

test('Rate limiting', (t) => {
  // 1 request every 5ms
  const inc = rateLimit(() => count++, 1, 200)
  const results = []
  let count = 0

  // Queue up 10 calls
  for (let i = 0; i < 10; i++) {
    inc().then(results.push.bind(results))
  }

  return wait(350).then(function () {
    t.equals(count, 2, 'requests made after first queuing')
    return wait(800).then(function () {
      t.equals(count, 6, 'requests made after 4 wait periods')
      return wait(2100).then(function () {
        t.equals(count, 10, 'all requests made in the end')
        t.looseEqual(results, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'returned all expected results')
      })
    })
  })
})
