
import Entry from './entry';

class ParentEntry {
  private _linkedOnKeys: string[]
  private _element: Entry

  constructor (element: Entry) {
    this._linkedOnKeys = []
    this._element = element
  }

  get linkedOnKeys(): string[] {
    return this._linkedOnKeys
  }

  get element(): Entry {
    return this._element
  }

  isValid(): boolean {
    return this._linkedOnKeys.length > 0
  }
}

export {
  ParentEntry as default,
  ParentEntry
}
