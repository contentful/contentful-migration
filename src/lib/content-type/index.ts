import APIContentType from '../interfaces/content-type'

export default class ContentType implements APIContentType {
  public hasEntries: Boolean = false
  public sys
  public fields
  public name
  public description

  constructor (ct: APIContentType) {
    Object.assign(this, ct)
  }
}
