
import Entry from './entry';

class Link {
  private _field: string
  private _index: number
  private _element: Entry

  constructor (element: Entry, field: string, index: number = -1) {
    this._field = field
    this._index = index
    this._element = element
  }

  get field(): string {
    return this._field
  }

  get index(): number {
    return this._index
  }

  get element(): Entry {
    return this._element
  }

  isValid(): boolean {
    return this._field.length > 0
  }

  isInArray(): boolean {
    return this._index != -1
  }
}

export {
  Link as default,
  Link
}
