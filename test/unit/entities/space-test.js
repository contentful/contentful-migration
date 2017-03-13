import test from 'tape'
import sinon from 'sinon'
import {spaceMock, mockCollection} from '../mocks/entities'
import {wrapSpace, wrapSpaceCollection, __RewireAPI__ as spaceRewireApi} from '../../../lib/entities/space'

const httpMock = {
  httpClientParams: {},
  cloneWithNewParams: sinon.stub()
}

function setup () {
  spaceRewireApi.__Rewire__('rateLimit', sinon.stub())
}

function teardown () {
  spaceRewireApi.__ResetDependency__('rateLimit', sinon.stub())
}

test('Space is wrapped', (t) => {
  setup()
  const wrappedSpace = wrapSpace(httpMock, spaceMock)
  t.looseEqual(wrappedSpace.toPlainObject(), spaceMock)
  teardown()
  t.end()
})

test('Space collection is wrapped', (t) => {
  setup()
  const spaceCollection = mockCollection(spaceMock)
  const wrappedSpace = wrapSpaceCollection(httpMock, spaceCollection)
  t.looseEqual(wrappedSpace.toPlainObject(), spaceCollection)
  teardown()
  t.end()
})
