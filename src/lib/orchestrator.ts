'use strict'
import { Packet } from '_debugger'

const Bluebird = require('bluebird')
const { expect } = require('chai')

import FakeAPI from './fake-api/index'
import { migration } from './migration-steps/index'
import IntentList from './intent-list/index'

import ApiContentType from './interfaces/content-type'
import ApiEntry from './interfaces/api-entry'
import { ContentType, Field } from './entities/content-type'
import { Entry } from './entities/entry'

export default async function (existingCts, existingEntries, migrationScript) {
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
  return batches
}
