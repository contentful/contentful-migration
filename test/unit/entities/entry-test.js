import test from 'tape'
import {cloneMock} from '../mocks/entities'
import setupHttpMock from '../mocks/http'
import {wrapEntry, wrapEntryCollection} from '../../../lib/entities/entry'
import {
  entityWrappedTest,
  entityCollectionWrappedTest,
  entityUpdateTest,
  entityDeleteTest,
  entityPublishTest,
  entityActionTest,
  failingActionTest,
  failingVersionActionTest
} from '../test-creators/instance-entity-methods'

function setup (promise) {
  return {
    httpMock: setupHttpMock(promise),
    entityMock: cloneMock('entry')
  }
}

test('Entry is wrapped', (t) => {
  entityWrappedTest(t, setup, {
    wrapperMethod: wrapEntry
  })
})

test('Entry collection is wrapped', (t) => {
  return entityCollectionWrappedTest(t, setup, {
    wrapperMethod: wrapEntryCollection
  })
})

test('Entry update', (t) => {
  return entityUpdateTest(t, setup, {
    wrapperMethod: wrapEntry
  })
})

test('Entry update fails', (t) => {
  return failingVersionActionTest(t, setup, {
    wrapperMethod: wrapEntry,
    actionMethod: 'update'
  })
})

test('Entry delete', (t) => {
  return entityDeleteTest(t, setup, {
    wrapperMethod: wrapEntry
  })
})

test('Entry delete fails', (t) => {
  return failingActionTest(t, setup, {
    wrapperMethod: wrapEntry,
    actionMethod: 'delete'
  })
})

test('Entry publish', (t) => {
  return entityPublishTest(t, setup, {
    wrapperMethod: wrapEntry
  })
})

test('Entry publish fails', (t) => {
  return failingVersionActionTest(t, setup, {
    wrapperMethod: wrapEntry,
    actionMethod: 'publish'
  })
})

test('Entry unpublish', (t) => {
  return entityActionTest(t, setup, {
    wrapperMethod: wrapEntry,
    actionMethod: 'unpublish'
  })
})

test('Entry unpublish fails', (t) => {
  return failingActionTest(t, setup, {
    wrapperMethod: wrapEntry,
    actionMethod: 'unpublish'
  })
})

test('Entry archive', (t) => {
  return entityActionTest(t, setup, {
    wrapperMethod: wrapEntry,
    actionMethod: 'archive'
  })
})

test('Entry archive fails', (t) => {
  return failingVersionActionTest(t, setup, {
    wrapperMethod: wrapEntry,
    actionMethod: 'archive'
  })
})

test('Entry unarchive', (t) => {
  return entityActionTest(t, setup, {
    wrapperMethod: wrapEntry,
    actionMethod: 'unarchive'
  })
})

test('Entry unarchive fails', (t) => {
  return failingActionTest(t, setup, {
    wrapperMethod: wrapEntry,
    actionMethod: 'unarchive'
  })
})
