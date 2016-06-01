import test from 'tape'
import {cloneMock} from '../mocks/entities'
import setupHttpMock from '../mocks/http'
import {wrapLocale, wrapLocaleCollection} from '../../../lib/entities/locale'
import {
  entityWrappedTest,
  entityCollectionWrappedTest,
  entityUpdateTest,
  entityDeleteTest,
  failingActionTest,
  failingVersionActionTest
} from '../test-creators/instance-entity-methods'

function setup (promise) {
  return {
    httpMock: setupHttpMock(promise),
    entityMock: cloneMock('locale')
  }
}

test('Locale is wrapped', (t) => {
  entityWrappedTest(t, setup, {
    wrapperMethod: wrapLocale
  })
})

test('Locale collection is wrapped', (t) => {
  return entityCollectionWrappedTest(t, setup, {
    wrapperMethod: wrapLocaleCollection
  })
})

test('Locale update', (t) => {
  return entityUpdateTest(t, setup, {
    wrapperMethod: wrapLocale
  })
})

test('Locale update fails', (t) => {
  return failingVersionActionTest(t, setup, {
    wrapperMethod: wrapLocale,
    actionMethod: 'update'
  })
})

test('Locale delete', (t) => {
  return entityDeleteTest(t, setup, {
    wrapperMethod: wrapLocale
  })
})

test('Locale delete fails', (t) => {
  return failingActionTest(t, setup, {
    wrapperMethod: wrapLocale,
    actionMethod: 'delete'
  })
})
