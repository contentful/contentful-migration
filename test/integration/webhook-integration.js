import generateRandomId from './generate-random-id'

export default function webhookTests (t, space) {
  t.test('Gets webhooks', (t) => {
    t.plan(2)
    return space.getWebhooks()
      .then((webhooks) => {
        t.ok(webhooks.sys, 'sys')
        t.ok(webhooks.items, 'fields')
      })
  })

  t.test('Create webhook with id', (t) => {
    const id = generateRandomId('webhook')
    return space.createWebhookWithId(id, {
      name: 'testwebhook',
      url: 'http://localhost:8080',
      topics: ['Entry.publish']
    })
      .then((webhook) => {
        t.equals(webhook.sys.id, id, 'id')
        return webhook.getCalls()
          .then((calls) => {
            t.ok(calls.items, 'gets list of calls')
            return webhook.getHealth()
              .then((health) => {
                t.ok(health.calls, 'gets webhook health')
                return webhook.delete()
              })
          })
      })
  })

  t.test('Create webhook', (t) => {
    return space.createWebhook({
      name: 'testname',
      url: 'http://localhost:8080',
      topics: ['Entry.publish']
    })
      .then((webhook) => {
        t.equals(webhook.name, 'testname', 'name')
        t.ok(webhook.url, 'url')
        webhook.name = 'updatedname'
        webhook.update()
          .then((updatedWebhook) => {
            t.equals(updatedWebhook.name, 'updatedname', 'name')
            return updatedWebhook.delete()
          })
      })
  })
}
