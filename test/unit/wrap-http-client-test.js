import test from 'tape'
import sinon from 'sinon'
import wrapHttpClient from '../../lib/wrap-http-client'

test('Passes along HTTP client parameters', (t) => {
  const rateLimitStub = sinon.stub()
  wrapHttpClient.__Rewire__('rateLimit', rateLimitStub)

  const httpMock = {}
  ;['get', 'post', 'put', 'delete', 'patch', 'head'].forEach((methodName) => {
    httpMock[methodName] = () => {}
  })
  wrapHttpClient(httpMock)
  t.equal(rateLimitStub.callCount, 6, 'wraps http method calls')
  wrapHttpClient.__ResetDependency__('rateLimit')
  t.end()
})
