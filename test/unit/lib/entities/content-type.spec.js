const { expect } = require('chai')

const Fields = require('../../../../src/lib/entities/content-type').Fields

it('moves fields correctly', () => {
  const myFields = [
    { id: 'a' },
    { id: 'b' },
    { id: 'c' },
    { id: 'd' },
    { id: 'e' },
    { id: 'f' },
    { id: 'g' }
  ]

  const fields = new Fields(myFields)

  fields.moveField('c', 'toTheTop')
  fields.moveField('d', 'toTheBottom')
  fields.moveField('f', 'beforeField', 'e')
  fields.moveField('g', 'afterField', 'e')

  expect(myFields).to.eql([
    { id: 'c' },
    { id: 'a' },
    { id: 'b' },
    { id: 'f' },
    { id: 'e' },
    { id: 'g' },
    { id: 'd' }
  ])
})
