const { readFileSync } = require('fs')
const { resolve } = require('path')

const express = require('express')
const app = express()

const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN
const organization = process.env.CONTENTFUL_ORGANIZATION
const mode = process.env.CONTENTFUL_E2E_MODE || 'browser'

app.get('/', function (req, res) {
  res.send(`<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>end to end tests</title>
  </head>
  <body>
    <h1>Contentful CMA end 2 end test</h1>
    <pre></pre>
    <script src="/sdk.js"></script>
    <script src="/test.js"></script>
  </body>
</html>`)
})

app.get('/sdk.js', function (req, res) {
  const sdk = readFileSync(resolve(__dirname, '..', '..', 'dist', `contentful-management.${mode}.min.js`))
  res.send(sdk)
})

app.get('/test.js', function (req, res) {
  res.send(`
  function updateStatus (status) {
    console.log(status)
    document.querySelector('h1').innerText = status
  }

  updateStatus('Initialising client')

  const client = contentfulManagement.createClient({
    accessToken: '${accessToken}'
  })

  updateStatus('Creating space')

  client.createSpace({
    name: 'JS CMA e2e test'
  }, '${organization}')
    .then(function (space) {
      updateStatus('Creating content type')

      return space.createContentType({
        name: 'testentity',
        fields: [
          {
            id: 'title', name: 'Title', type: 'Text'
          }
        ]
      })
        .then(function (contentType) {
          updateStatus('Publishing content type')
          return contentType.publish()
        })
        .then(function (contentType) {
          updateStatus('Creating test entry')
          return space.createEntry(contentType.sys.id, {fields: {title: {'en-US': 'this is the title'}}})
        })
        .then(function () {
          updateStatus('Deleting space')
          space.delete()
        })
        .catch(function (err) {
          return space.delete()
            .then(function () { throw err })
        })
    })
    .then(function () {
      updateStatus('Success')
    })
    .catch(function (err) {
      updateStatus('Error')
      console.error(err)
      document.querySelector('pre').innerText = JSON.stringify(err, null, 2)
    })
`)
})

module.exports = function initServer (cb) {
  const server = app.listen(3000, () => cb(server))
}
