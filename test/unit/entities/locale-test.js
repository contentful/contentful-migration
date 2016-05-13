import test from 'tape'
import {localeMock, mockCollection} from '../utils/mocks'
import {wrapLocale, wrapLocaleCollection} from '../../../lib/entities/locale'

test('Locale is wrapped', (t) => {
  const wrappedLocale = wrapLocale(localeMock)
  t.looseEqual(wrappedLocale.toPlainObject(), localeMock)
  t.end()
})

test('Locale collection is wrapped', (t) => {
  const localeCollection = mockCollection(localeMock)
  const wrappedLocale = wrapLocaleCollection(localeCollection)
  t.looseEqual(wrappedLocale.toPlainObject(), localeCollection)
  t.end()
})
