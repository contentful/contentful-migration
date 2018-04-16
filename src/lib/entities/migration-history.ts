

export class MigrationHistory {
  public id: string
  public migrationName: string
  public started: number
  public completed?: number
  public detail?: any

  constructor(idOrName: string, fields?: {[key: string]: { 'en-US': any }}) {
    if (!fields) {
      this.migrationName = idOrName
      this.started = Date.now()
      return
    }
    this.id = idOrName
    this.migrationName = fields.migrationName["en-US"]

    if (fields.started && fields.started["en-US"]) {
      this.started = Date.parse(fields.started["en-US"])
    }
    if (fields.completed && fields.completed["en-US"]) {
      this.completed = Date.parse(fields.completed["en-US"])
    }

    this.detail = fields.detail ? fields.detail["en-US"] : undefined

  }

  static structure() {
    return {
      displayField: 'migrationName',
      name: 'Migration History',
      description: 'System Type - Do Not Modify',
      fields:
      [ { id: 'migrationName',
          name: 'Migration Name',
          type: 'Symbol',
          required: true },
        { id: 'started',
          name: 'Started',
          type: 'Date' },
        { id: 'completed',
          name: 'Completed',
          type: 'Date' },
        { id: 'detail',
          name: 'Detail',
          type: 'Object' } ]
      }
  }

  static async getOrCreateContentType(space) {
    try{
      return await space.getContentType('migrationHistory')
    }catch(err) {
      // table doesnt exist, create it and wait for it to propagate in the system
      const type = await space.createContentTypeWithId('migrationHistory', MigrationHistory.structure())
      await type.publish()
    }
  }

  update(entry) {
    if (!entry.fields) {
      entry.fields = {}
    }
    entry.fields.migrationName = { 'en-US': this.migrationName }
    entry.fields.started = { 'en-US': new Date(this.started).toISOString() }
    if(this.completed) {
      entry.fields.completed = { 'en-US': new Date(this.completed).toISOString() }
    }
    if (this.detail) {
      entry.fields.detail = { 'en-US': this.detail }
    }
    return entry
  }
}