import test from 'blue-tape'
import sinon from 'sinon'
import {environmentMock, mockCollection} from '../mocks/entities'
import {wrapEnvironment, wrapEnvironmentCollection, __RewireAPI__ as environmentRewireApi} from '../../../lib/entities/environment'

const httpMock = {
  httpClientParams: {},
  cloneWithNewParams: sinon.stub()
}

function setup () {
  environmentRewireApi.__Rewire__('rateLimit', sinon.stub())
}

function teardown () {
  environmentRewireApi.__ResetDependency__('rateLimit', sinon.stub())
}

test('Environment is wrapped', (t) => {
  setup()
  const wrappedEnvironment = wrapEnvironment(httpMock, environmentMock)
  t.looseEqual(wrappedEnvironment.toPlainObject(), environmentMock)
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
