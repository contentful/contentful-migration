import test from 'tape'
import sinon from 'sinon'
import {assign} from 'lodash/object'
import {cloneDeep} from 'lodash/lang'
import {sysMock} from '../mocks'

import {wrapSpace, wrapSpaceCollection, __RewireAPI__ as spaceRewireApi} from '../../../lib/entities/space'

const httpMock = {
  httpClientParams: {},
  cloneWithNewParams: sinon.stub()
}

const space = {
  sys: assign(cloneDeep(sysMock), {
    type: 'Space'
  }),
  name: 'space'
}

function setup () {
  spaceRewireApi.__Rewire__('wrapHttpClient', sinon.stub())
}

function teardown () {
  spaceRewireApi.__ResetDependency__('wrapHttpClient', sinon.stub())
}

test('Space is wrapped', (t) => {
  setup()
  const wrappedSpace = wrapSpace(httpMock, space)
  t.looseEqual(wrappedSpace.toPlainObject(), space)
  teardown()
  t.end()
})

test('Space collection is wrapped', (t) => {
  setup()
  const spaceCollection = {
    total: 1,
    skip: 0,
    limit: 100,
    items: [
      space
    ]
  }
  const wrappedSpace = wrapSpaceCollection(httpMock, spaceCollection)
  t.looseEqual(wrappedSpace.toPlainObject(), spaceCollection)
  teardown()
  t.end()
})
