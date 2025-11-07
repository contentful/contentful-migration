import { describe, it, expect, vi } from 'vitest'

import { migration as migrationSteps } from '../../../src/lib/migration-steps'
import IntentList from '../../../src/lib/intent-list'
import Fetcher from '../../../src/lib/fetcher'

const noOp = () => undefined

describe('Content Type fetcher', () => {
  it('fetches all the Content Types in the plan', async () => {
    const intents = await migrationSteps(
      function up(migration) {
        const person = migration.createContentType('person', {
          name: 'bar',
          description: 'A content type for a person'
        })

        person.createField('name', {
          name: 'Name',
          type: 'Symbol'
        })

        migration.editContentType('dog', {
          name: 'Doggo',
          description: 'A shepard dog'
        })

        migration.editContentType('cat', {
          name: 'Cat',
          description: 'The trump of the animal world'
        })

        migration.deleteContentType('dog')
        migration.deleteContentType('plant')
      },
      noOp,
      {}
    )

    const request = vi.fn()

    request.mockResolvedValue({
      items: [
        {
          name: 'Person',
          description: 'Someone like you',
          fields: []
        },
        {
          name: 'A very goodboy',
          description: 'This is the best goodboy',
          fields: [
            {
              id: 'name',
              name: 'Name',
              type: 'Number'
            }
          ]
        },
        {
          name: 'Cat',
          description: 'The trump of the animal world',
          fields: []
        },
        {
          name: 'Plant',
          description: 'A plant!',
          fields: []
        }
      ],
      skip: 0,
      limit: 0,
      total: 4
    })

    const intentList = new IntentList(intents)

    const fetcher = new Fetcher(request)
    const contentTypes = await fetcher.getContentTypesInChunks(intentList)

    expect(request).toHaveBeenCalledWith({
      method: 'GET',
      url: `/content_types?limit=100&order=sys.createdAt&sys.id[in]=person,dog,cat,plant&skip=0`
    })
    expect(contentTypes).toEqual([
      {
        name: 'Person',
        description: 'Someone like you',
        fields: []
      },
      {
        name: 'A very goodboy',
        description: 'This is the best goodboy',
        fields: [
          {
            id: 'name',
            name: 'Name',
            type: 'Number'
          }
        ]
      },
      {
        name: 'Cat',
        description: 'The trump of the animal world',
        fields: []
      },
      {
        name: 'Plant',
        description: 'A plant!',
        fields: []
      }
    ])
  })
})
