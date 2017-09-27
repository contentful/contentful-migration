'use strict';

const Bluebird = require('bluebird');

module.exports = Bluebird.coroutine(function * checkEntriesForDeletedCts (chunks, contentTypes, request) {
  const deletedCtIds = new Set(chunks
    .filter((chunk) => chunk[0].type === 'contentType/delete')
    .map((chunk) => chunk[0].payload.contentTypeId)
  );

  if (deletedCtIds.size === 0) {
    return contentTypes;
  }

  return Bluebird.map(contentTypes, Bluebird.coroutine(function * (ct) {
    if (deletedCtIds.has(ct.sys.id)) {
      const response = yield request({
        method: 'GET',
        url: `/entries?sys.contentType.sys.id=${ct.sys.id}`
      });

      if (response.items.length > 0) {
        ct.hasEntries = true;
      }
    }

    return ct;
  }));
});
