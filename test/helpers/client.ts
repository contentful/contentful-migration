import packageVersion from '../../package.json'
import { createManagementClient } from '../../dist/bin/lib/contentful-client'
import { createMakeRequest } from '../../src/bin/cli'

const config = {
  accessToken: process.env.CONTENTFUL_INTEGRATION_TEST_CMA_TOKEN,
  application: `contentful.migration-cli.e2e-test/${packageVersion.version}`
}

const client = createManagementClient(config)

const makeRequest = function (
  spaceId: string,
  environmentId: string,
  organizationId: string | undefined,
  requestConfig: any
) {
  return createMakeRequest(client, { spaceId, environmentId, organizationId })(requestConfig)
}

const waitForJobCompletion = async (
  makeRequest: any,
  spaceId: string,
  environmentId: string
): Promise<void> => {
  while (true) {
    try {
      const organizationId = undefined
      const environmentJob = await makeRequest(spaceId, environmentId, organizationId, {
        method: 'GET',
        url: ``
      })

      const status = environmentJob.sys.status.sys.id
      if (status === 'failed') {
        throw new Error('Could not create dev env')
      }

      if (status === 'ready') {
        return
      }

      await new Promise((resolve) => setTimeout(resolve, 1000))
    } catch (error) {
      console.log('Env job failed')
      console.log(JSON.stringify(error))
      throw error
    }
  }
}

const createDevEnvironment = async (spaceId: string, environmentId: string): Promise<string> => {
  try {
    const organizationId = undefined
    await makeRequest(spaceId, environmentId, organizationId, {
      method: 'PUT',
      url: '',
      data: {
        name: environmentId
      }
    })

    await waitForJobCompletion(makeRequest, spaceId, environmentId)
  } catch (error) {
    console.log('Could not initiate dev env job')
    console.log(JSON.stringify(error))
    throw error
  }
  return environmentId
}

function getDevContentType(spaceId: string, environmentId: string, id: string) {
  const organizationId = undefined
  return makeRequest(spaceId, environmentId, organizationId, {
    method: 'GET',
    url: `/content_types/${id}`
  })
}

function getDevEditorInterface(spaceId: string, environmentId: string, id: string) {
  const organizationId = undefined
  return makeRequest(spaceId, environmentId, organizationId, {
    method: 'GET',
    url: `/content_types/${id}/editor_interface`
  })
}

function getEntries(spaceId: string, environmentId: string, id: string) {
  const organizationId = undefined
  return makeRequest(spaceId, environmentId, organizationId, {
    method: 'GET',
    url: `/entries?content_type=${id}`
  })
}

function deleteDevEnvironment(spaceId: string, environmentId: string) {
  const organizationId = undefined
  return makeRequest(spaceId, environmentId, organizationId, {
    method: 'DELETE',
    url: ''
  })
}

function getDevTag(spaceId: string, environmentId: string, id: string) {
  const organizationId = undefined
  return makeRequest(spaceId, environmentId, organizationId, {
    method: 'GET',
    url: `/tags/${id}`
  })
}

export {
  makeRequest,
  createDevEnvironment,
  deleteDevEnvironment,
  getDevContentType,
  getEntries,
  getDevEditorInterface,
  getDevTag
}
