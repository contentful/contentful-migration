import test from 'tape'
import {entryMock, mockCollection} from '../utils/mocks'
import {cloneDeep} from 'lodash/lang'
import {wrapEntry, wrapEntryCollection} from '../../../lib/entities/entry'

test('Entry is wrapped', (t) => {
  const wrappedEntry = wrapEntry(entryMock)
  t.looseEqual(wrappedEntry.toPlainObject(), entryMock)
  t.end()
})

test('Localized entry is wrapped', (t) => {
  const entry = cloneDeep(entryMock)
  const field = entry.fields.field1
  entry.fields = {
    en: {
      field1: field
    }
  }
  const wrappedEntry = wrapEntry(entry)
  t.looseEqual(wrappedEntry.toPlainObject(), entry)
  t.end()
})

test('Entry collection is wrapped', (t) => {
  const entryCollection = mockCollection(entryMock)
  const wrappedEntry = wrapEntryCollection(entryCollection, true)
  t.looseEqual(wrappedEntry.toPlainObject(), entryCollection)
  t.end()
})
