interface HttpRequest {
  method: 'PUT' | 'POST' | 'DELETE' | 'GET'
  url: string
  headers?: object
  data?: {
    name?: string
    description?: string
    displayField?: string
    fields?: object
  }
}

export { HttpRequest as default, HttpRequest }
