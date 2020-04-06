export function environmentAliasReadOnlyTests (t, space) {
  t.test('Gets aliases', (t) => {
    t.plan(2)
    return space.getEnvironmentAliases()
      .then((response) => {
        t.equals(response.items[0].sys.id, 'master')
        t.equals(response.items[0].environment.sys.id, 'previously-master')
      })
  })

  t.test('Updates alias', (t) => {
    t.plan(4)
    return space.getEnvironmentAlias('master')
      .then(alias => {
        t.equals(alias.sys.id, 'master')
        t.equals(alias.environment.sys.id, 'previously-master')
        alias.environment.sys.id = 'feature-13'
        return alias.update()
      })
      .then(updatedAlias => {
        t.equals(updatedAlias.sys.id, 'master')
        t.equals(updatedAlias.environment.sys.id, 'feature-13')
      })
  })
}
