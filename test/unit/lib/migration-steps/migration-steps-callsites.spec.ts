import { describe, it, expect } from 'vitest'
import path from 'path'
import { migration as createSteps } from '../../../../src/lib/migration-steps'

const getFileName = (fullFileName: string) => {
  return path.parse(fullFileName).base
}

const thisFile = getFileName(__filename)

describe.skip('migration-steps callsites', () => {
  describe('when executing a migration', () => {
    it('includes callsites in the steps', async () => {
      const steps = await createSteps(function up(migration: any) {
        const person = migration.createContentType('person', {
          description: 'A content type for a person'
        })

        person.name('a person')

        const fullName = person.createField('fullName', {
          name: 'Full Name'
        })

        fullName.required(true)

        const address = migration.editContentType('address', {
          name: 'the new name'
        })

        address.editField('houseNumber').omitted(true)
      })

      const callsites = steps.map((step: any) => {
        return step.meta.callsite
      })

      const callsiteWithFiles = callsites.map(({ line, file }: any) => {
        return {
          line,
          file: getFileName(file)
        }
      })

      expect(callsiteWithFiles).toEqual([
        {
          line: 19,
          file: thisFile
        },
        {
          line: 19,
          file: thisFile
        },
        {
          line: 23,
          file: thisFile
        },
        {
          line: 25,
          file: thisFile
        },
        {
          line: 25,
          file: thisFile
        },
        {
          line: 29,
          file: thisFile
        },
        {
          line: 31,
          file: thisFile
        },
        {
          line: 35,
          file: thisFile
        }
      ])
    })
  })
})
