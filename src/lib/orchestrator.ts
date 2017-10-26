'use strict'
import * as _ from 'lodash'

import FakeAPI from './fake-api/index'
import { migration } from './migration-steps/index'
import IntentList from './intent-list/index'

import { ContentType, Field } from './entities/content-type'
import { Entry } from './entities/entry'
import { HttpRequest } from './interfaces/request'

export default async function (existingCts, existingEntries, migrationScript): Promise<HttpRequest[]> {
  const intents = await migration(migrationScript)
  const list = new IntentList(intents)
  const packages = list.toPackages()

  const existingCTs: Map<String, ContentType> = new Map()

  for (const ct of existingCts) {
    const contentType = new ContentType({
      id: ct.sys.id,
      version: ct.sys.version,
      name: ct.name,
      description: ct.description,
      fields: ct.fields as Field[]
    })

    existingCTs.set(contentType.id, contentType)
  }

  const entries: Entry[] = existingEntries.map((apiEntry) => {
    return new Entry({
      id: apiEntry.sys.id,
      contentTypeId: apiEntry.sys.contentType.sys.id,
      fields: apiEntry.fields,
      version: apiEntry.sys.version
    })
  })

  const state = new FakeAPI(existingCTs, entries)

  for (const pkg of packages) {
    await pkg.applyTo(state)
  }

  const batches = await state.getRequestBatches()
  // for now, making this compatible to our tests where we expect a flat array of request objects
  return _.flatten(batches.map(b => b.requests))
}
