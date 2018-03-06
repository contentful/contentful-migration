import test from 'blue-tape'
import sinon from 'sinon'
import {environmentMock, mockCollection} from '../mocks/entities'
import {wrapEnvironment, wrapEnvironmentCollection, __RewireAPI__ as environmentRewireApi} from '../../../lib/entities/environment'

const httpMock = {
  httpClientParams: {},
  defaults: {
    baseURL: 'http://foo.bar/'
  },
  cloneWithNewParams: sinon.stub()
}

function setup () {
  environmentRewireApi.__Rewire__('rateLimit', sinon.stub())
}

function teardown () {
  environmentRewireApi.__ResetDependency__('rateLimit')
}

test('Environment is wrapped', (t) => {
  setup()
  const wrappedEnvironment = wrapEnvironment(httpMock, environmentMock)
  t.looseEqual(wrappedEnvironment.toPlainObject(), environmentMock)
  t.equal(httpMock.cloneWithNewParams.args[0][0].baseURL, 'http://foo.bar/environments/id', 'adjust the baseURL to match environments')
  t.equal(httpMock.cloneWithNewParams.args[1][0].baseURL, 'http://foo.bar/environments/id', 'adjust the baseURL to match environments')
  teardown()
  t.end()
})

test('Environment collection is wrapped', (t) => {
  setup()
  const environmentCollection = mockCollection(environmentMock)
  const wrappedEnvironment = wrapEnvironmentCollection(httpMock, environmentCollection)
  t.looseEqual(wrappedEnvironment.toPlainObject(), environmentCollection)
  teardown()
  t.end()
})
