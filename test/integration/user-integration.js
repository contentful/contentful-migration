export default function userTests (t, space) {
  t.test('Gets users', (t) => {
    t.plan(3)
    return space.getSpaceUsers()
      .then((response) => {
        t.ok(response.sys, 'sys')
        t.ok(response.items, 'items')
        t.ok(response.items[0].sys.type, 'User')
      })
  })
  t.test('Gets user by id', (t) => {
    t.plan(3)
    return space.getSpaceUser('4grQr6pMEy51ppQTRoQQDz')
      .then((response) => {
        t.ok(response.sys, 'sys')
        t.ok(response.sys.id, '4grQr6pMEy51ppQTRoQQDz')
        t.ok(response.sys.type, 'User')
      })
  })
}
