export type TagVisibility = 'private' | 'public'

export default interface APITag {
  sys: {
    id: string,
    version: number,
    visibility: TagVisibility
  }
  name: string
}
