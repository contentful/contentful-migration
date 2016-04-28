import test from 'tape'
import sinon from 'sinon'
import createClient from '../../lib/contentful-management'

const axios = {create: sinon.stub()}

test('Throws if no accessToken is defined', (t) => {
  t.throws(() => {
    createClient(axios, {space: 'spaceid'})
  }, /Expected parameter accessToken/)
  t.end()
})

test('Passes along HTTP client parameters', (t) => {
  createClient.__Rewire__('version', 'version')
  const createHttpClientStub = sinon.stub()
  createClient.__Rewire__('createHttpClient', createHttpClientStub)
  createClient.__Rewire__('createContentfulApi', sinon.stub().returns({}))

  const client = createClient(axios, {accessToken: 'accesstoken'})
  t.ok(createHttpClientStub.args[0][1].headers['Content-Type'], 'sets the content type')
  t.equals(createHttpClientStub.args[0][1].headers['X-Contentful-User-Agent'], 'contentful-management.js/version', 'sets the user agent header')
  t.ok(client, 'returns a client')
  createClient.__ResetDependency__('createHttpClient')
  createClient.__ResetDependency__('createContentfulApi')
  t.end()
})
