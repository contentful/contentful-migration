export function localeReadOnlyTests (t, space) {
  t.test('Gets locales', (t) => {
    t.plan(2)
    return space.getLocales()
    .then((response) => {
      t.ok(response.items[0].name, 'English')
      t.ok(response.items[0].code, 'en-US')
    })
  })
}

export function localeWriteTests (t, space) {
  t.test('Creates, gets, updates and deletes a locale', (t) => {
    t.plan(3)
    return space.createLocale({
      name: 'German (Austria)',
      code: 'de-AT'
    })
    .then((response) => {
      t.equals(response.code, 'de-AT', 'locale code after creation')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(space.getLocale(response.sys.id)
          .then((locale) => {
            t.equals(locale.code, 'de-AT', 'locale code after getting')
            locale.name = 'Deutsch (Österreich)'
            return locale.update()
            .then((updatedLocale) => {
              t.equals(updatedLocale.name, 'Deutsch (Österreich)', 'locale name after update')
              return updatedLocale.delete()
            })
          }))
        }, 3000)
      })
    })
  })
}
