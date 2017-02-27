import test from 'tape'
import { cloneMock } from '../mocks/entities'
import setupHttpMock from '../mocks/http'
import { wrapUpload } from '../../../lib/entities/upload'
import {
  entityWrappedTest,
  entityDeleteTest,
  failingActionTest
} from '../test-creators/instance-entity-methods'

function setup (promise) {
  return {
    httpMock: setupHttpMock(promise),
    entityMock: cloneMock('upload')
  }
}

test('Upload is wrapped', (t) => {
  entityWrappedTest(t, setup, {
    wrapperMethod: wrapUpload
  })
})

test('Upload delete', (t) => {
  return entityDeleteTest(t, setup, {
    wrapperMethod: wrapUpload
  })
})

test('Upload delete fails', (t) => {
  return failingActionTest(t, setup, {
    wrapperMethod: wrapUpload,
    actionMethod: 'delete'
  })
})
