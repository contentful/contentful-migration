export default function contentTypeTests (t, space) {
  t.test('Gets content type', (t) => {
    t.plan(3)
    return space.getContentType('1t9IbcfdCk6m04uISSsaIK')
    .then((response) => {
      t.ok(response.sys, 'sys')
      t.ok(response.name, 'name')
      t.ok(response.fields, 'fields')
    })
  })

  t.test('Gets content types', (t) => {
    t.plan(1)
    return space.getContentTypes()
    .then((response) => {
      t.ok(response.items, 'items')
    })
  })
}
