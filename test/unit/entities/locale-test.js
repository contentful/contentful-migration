import test from 'tape'
import {localeMock, mockCollection} from '../utils/mocks'
import setupHttpMock from '../utils/http-mock'
import {wrapLocale, wrapLocaleCollection} from '../../../lib/entities/locale'

function setup () {
  return {
    httpMock: setupHttpMock()
  }
}

test('Locale is wrapped', (t) => {
  const {httpMock} = setup()
  const wrappedLocale = wrapLocale(httpMock, localeMock)
  t.looseEqual(wrappedLocale.toPlainObject(), localeMock)
  t.end()
})

test('Locale collection is wrapped', (t) => {
  const {httpMock} = setup()
  const localeCollection = mockCollection(localeMock)
  const wrappedLocale = wrapLocaleCollection(httpMock, localeCollection)
  t.looseEqual(wrappedLocale.toPlainObject(), localeCollection)
  t.end()
})
