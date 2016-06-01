import test from 'tape'
import sinon from 'sinon'
import reduce from 'lodash/reduce'
import wrapHttpClient from '../../lib/wrap-http-client'

function createHttpMock () {
  return reduce(
    ['get', 'post', 'put', 'delete', 'patch', 'head'],
    (mock, methodName) => {
      mock[methodName] = sinon.stub()
      return mock
    },
    {}
  )
}

test('Passes along HTTP client parameters', (t) => {
  const rateLimitStub = sinon.stub()
  wrapHttpClient.__Rewire__('rateLimit', rateLimitStub)
  wrapHttpClient(createHttpMock(), {})
  t.equal(rateLimitStub.callCount, 6, 'wraps http method calls')
  wrapHttpClient.__ResetDependency__('rateLimit')
  t.end()
})

test('Call doesnt get backed off', (t) => {
  const httpMock = createHttpMock()
  httpMock.get.onCall(0).returns(Promise.resolve(''))
  const http = wrapHttpClient(httpMock, {
    concurrency: 6,
    delay: 1000,
    maxRetries: 4,
    retryOnTooManyRequests: true
  })

  http.get()
  .then(() => {
    t.ok(httpMock.get.calledOnce, 'http get is called once')
    t.end()
  })
})

test('Call gets backed off first time but then succeeds', (t) => {
  const httpMock = createHttpMock()
  httpMock.get.onCall(0).returns(Promise.reject({status: 429}))
  httpMock.get.onCall(1).returns(Promise.resolve(''))
  const http = wrapHttpClient(httpMock, {
    concurrency: 6,
    delay: 1000,
    maxRetries: 4,
    retryOnTooManyRequests: true
  })

  http.get()
  .then(() => {
    t.ok(httpMock.get.calledTwice, 'http get is called twice')
    t.end()
  })
})

test('Call gets backed off until maxRetries is reached', (t) => {
  const httpMock = createHttpMock()
  httpMock.get.returns(Promise.reject({status: 429}))
  const http = wrapHttpClient(httpMock, {
    concurrency: 6,
    delay: 1000,
    maxRetries: 2,
    retryOnTooManyRequests: true
  })

  http.get()
  .then(
    () => {},
    () => {
      t.ok(httpMock.get.calledThrice, 'http get is called three times')
      t.end()
    }
  )
})
