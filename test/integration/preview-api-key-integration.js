export default function apiKeyTests (t, space) {
  t.test('Gets previewApiKeys', (t) => {
    t.plan(2)
    return space.getPreviewApiKeys()
      .then((response) => {
        t.ok(response.sys, 'sys')
        t.ok(response.items, 'fields')
      })
  })
}
