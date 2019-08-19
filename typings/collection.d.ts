// eslint:disable

import { DefaultElements } from "./defaultElements"

export interface CollectionProp<TObj extends Object> {
  total: number,
  skip: number,
  limit: number,
  items: TObj[]
}

export interface Collection<TObj extends Object> extends CollectionProp<TObj>, DefaultElements<CollectionProp<TObj>> {
  sys: {
    type: "Array"
  }
}
