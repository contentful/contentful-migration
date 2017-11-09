export default interface APIEntry {
  sys: {
    id: string,
    version: number,
    contentType: {
      sys: {
        type: string,
        linkType: string,
        id: string
      }
    }
  },
  fields: object
}
