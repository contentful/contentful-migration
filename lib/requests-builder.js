'use strict';

module.exports = function requestsBuilder (ctPayloads) {
  const requests = [];

  for (const payload of ctPayloads) {
    let parentVersion = payload.meta.parentVersion;

    requests.push({
      method: 'PUT',
      url: `/content_types/${payload.meta.contentTypeId}`,
      headers: {
        'X-Contentful-Version': parentVersion
      },
      data: payload.payload
    });

    parentVersion += 1;

    requests.push({
      method: 'PUT',
      url: `/content_types/${payload.meta.contentTypeId}/published`,
      headers: {
        'X-Contentful-Version': parentVersion
      }
    });
  }

  return requests;
};
