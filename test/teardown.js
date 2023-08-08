const accessToken = process.env.CONTENTFUL_INTEGRATION_TEST_CMA_TOKEN
if (!accessToken) {
  throw new Error('CONTENTFUL_INTEGRATION_TEST_CMA_TOKEN is missing')
}

const space = process.env.CONTENTFUL_SPACE_ID

if (!space) {
  throw new Error('CONTENTFUL_SPACE_ID is missing')
}

console.log(`space id ${space}`)

const contentful = require('contentful-management')

function initClient() {
  return contentful.createClient(
    {
      accessToken,
      space
    },
    {
      type: 'plain'
    }
  )
}

const DEFAULT_SPACE_DELETION_THRESHOLD = 1000 * 60 * 60 // 1 hour
const cleanEnvironments = async () => {
  const client = initClient()
  const environments = await client.environment.getMany({ spaceId: space, query: { limit: 100 } })
  for (const environment of environments.items) {
    if (
      environment.sys.id !== 'master' &&
      Date.parse(environment.sys.updatedAt) + DEFAULT_SPACE_DELETION_THRESHOLD < Date.now()
    ) {
      console.log(`Deleting environment ${environment.sys.id}`)
      await client.environment.delete({ spaceId: space, environmentId: environment.sys.id })
    }
  }
}

cleanEnvironments().then(() => console.log('Old test environments cleaned'))
