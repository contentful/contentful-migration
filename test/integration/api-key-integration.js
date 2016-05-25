import generateRandomId from './generate-random-id'

export default function apiKeyTests (t, space) {
  t.test('Gets apiKeys', (t) => {
    t.plan(2)
    return space.getApiKeys()
    .then((response) => {
      t.ok(response.sys, 'sys')
      t.ok(response.items, 'fields')
    })
  })

  t.test('Create apiKey with id', (t) => {
    const id = generateRandomId('apiKey')
    return space.createApiKeyWithId(id, {
      name: generateRandomId('testapiKey'),
      description: 'test api key'
    })
    .then((apiKey) => {
      t.equals(apiKey.sys.id, id, 'id')
      return apiKey.delete()
    })
  })

  t.test('Create apiKey', (t) => {
    const name = generateRandomId('name')
    return space.createApiKey({
      name: name,
      description: 'test api key'
    })
    .then((apiKey) => {
      t.equals(apiKey.name, name, 'name')
      const updatedname = generateRandomId('updatedname')
      apiKey.name = updatedname
      apiKey.update()
      .then((updatedApiKey) => {
        t.equals(updatedApiKey.name, updatedname, 'name')
        return updatedApiKey.delete()
      })
    })
  })
}
