import HttpRequest from './interfaces/request'

function makeCreateOrUpdateRequestsBuilder (requests: HttpRequest[]) {
  return function (payload) {
    let parentVersion = payload.meta.parentVersion

    requests.push({
      method: 'PUT',
      url: `/content_types/${payload.meta.contentTypeId}`,
      headers: {
        'X-Contentful-Version': parentVersion
      },
      data: payload.payload
    })

    parentVersion += 1

    requests.push({
      method: 'PUT',
      url: `/content_types/${payload.meta.contentTypeId}/published`,
      headers: {
        'X-Contentful-Version': parentVersion
      }
    })
  }
}

function makeDeleteRequestsBuilder (requests: HttpRequest[]) {
  return function (payload) {
    let parentVersion = payload.meta.parentVersion

    requests.push({
      method: 'DELETE',
      url: `/content_types/${payload.meta.contentTypeId}/published`,
      headers: {
        'X-Contentful-Version': parentVersion
      }
    })

    parentVersion += 1

    requests.push({
      method: 'DELETE',
      url: `/content_types/${payload.meta.contentTypeId}`,
      headers: {
        'X-Contentful-Version': parentVersion
      }
    })
  }
}

export default function requestsBuilder (ctPayloads): HttpRequest[] {
  const requests: HttpRequest[] = []
  const makeCreateOrUpdateRequests = makeCreateOrUpdateRequestsBuilder(requests)
  const makeDeleteRequests = makeDeleteRequestsBuilder(requests)

  for (const payload of ctPayloads) {
    if (payload.isDelete) {
      makeDeleteRequests(payload)
    } else {
      makeCreateOrUpdateRequests(payload)
    }
  }

  return requests
}
