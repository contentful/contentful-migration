import test from 'tape'
import {entryMock, mockCollection} from '../mocks/entities'
import setupHttpMock from '../mocks/http'
import {cloneDeep} from 'lodash/lang'
import {wrapEntry, wrapEntryCollection} from '../../../lib/entities/entry'

function setup () {
  return {
    httpMock: setupHttpMock()
  }
}

test('Entry is wrapped', (t) => {
  const {httpMock} = setup()
  const wrappedEntry = wrapEntry(httpMock, entryMock)
  t.looseEqual(wrappedEntry.toPlainObject(), entryMock)
  t.end()
})

test('Localized entry is wrapped', (t) => {
  const {httpMock} = setup()
  const entry = cloneDeep(entryMock)
  const field = entry.fields.field1
  entry.fields = {
    en: {
      field1: field
    }
  }
  const wrappedEntry = wrapEntry(httpMock, entry)
  t.looseEqual(wrappedEntry.toPlainObject(), entry)
  t.end()
})

test('Entry collection is wrapped', (t) => {
  const {httpMock} = setup()
  const entryCollection = mockCollection(entryMock)
  const wrappedEntry = wrapEntryCollection(httpMock, entryCollection, true)
  t.looseEqual(wrappedEntry.toPlainObject(), entryCollection)
  t.end()
})
