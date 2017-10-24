export default interface APIContentType {
  sys: {
    id: string,
    version: number
  },
  fields: object[],
  name: string,
  description: string
}
