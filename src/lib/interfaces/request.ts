interface HttpRequest {
  method: 'PUT' | 'POST' | 'DELETE' | 'GET'
  url: string
  headers?: object
  data?: {
    fields?: object
    // TODO: This is currently really confusing: I am reusing the
    // httpRequest interface which is taylored for cts and therefore
    // expects only a fields property. But for a tag creation it
    // should instead expect a name property. Think of a good way to restructure this!
    name?: string
  }
}

export {
  HttpRequest as default,
  HttpRequest
}
