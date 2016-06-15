import test from 'tape'
import {cloneMock} from '../mocks/entities'
import setupHttpMock from '../mocks/http'
import {wrapEditorInterface} from '../../../lib/entities/editor-interface'
import {
  entityWrappedTest
} from '../test-creators/instance-entity-methods'

function setup (promise) {
  return {
    httpMock: setupHttpMock(promise),
    entityMock: cloneMock('editorInterface')
  }
}

test('Editor Interface is wrapped', (t) => {
  return entityWrappedTest(t, setup, {
    wrapperMethod: wrapEditorInterface
  })
})
