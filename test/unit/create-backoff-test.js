import test from 'tape'
import createBackoff from '../../lib/create-backoff'

function setup (requestedWaits) {
  createBackoff.__Rewire__('promisedWait', (delay) => {
    requestedWaits.push(delay)
    return Promise.resolve()
  })
}

function teardown () {
  createBackoff.__ResetDependency__('promisedWait')
}

test('backoff on first 2 attempts', (t) => {
  const requestedWaits = []
  setup(requestedWaits)

  const backoff = createBackoff(3)
  const error = new Error('thrown after 3 tries')
  const attempt = function () {
    if (requestedWaits.length < 2) {
      return backoff(error, attempt)
    } else {
      return 'response'
    }
  }

  return attempt().then(function (response) {
    t.looseEquals(requestedWaits, [1000, 2000])
    t.equals(response, 'response', 'returns expected response')
    t.end()
    teardown()
  })
})

test('backoff until request totally fails', (t) => {
  const requestedWaits = []
  setup(requestedWaits)

  const backoff = createBackoff(3)
  const error = new Error('thrown after 3 tries')
  const attempt = function () {
    return backoff(error, attempt)
  }

  return attempt().then(function () {
    throw new Error('should not succeed')
  }).catch(function (error) {
    t.looseEquals(requestedWaits, [1000, 2000, 4000], 'wait periods for 3 attempts')
    t.equals(error.message, 'thrown after 3 tries', 'throws expected error')
    t.end()
    teardown()
  })
})
