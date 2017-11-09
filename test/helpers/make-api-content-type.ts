import { Field } from '../../src/lib/interfaces/content-type'

interface SimpleCT {
  id: string
  version: number
  name?: string
  displayField?: string
  fields?: Field[]
  description?: string
}

const makeApiContentType = function (ct: SimpleCT) {
  return {
    sys: {
      id: ct.id,
      version: ct.version
    },
    name: ct.name,
    displayField: ct.displayField,
    fields: ct.fields,
    description: ct.description
  }
}

export {
  makeApiContentType as default
}
