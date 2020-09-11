const makeApiTag = function (id: string) {
  return {
    sys: { id, version: 1 },
    name: `${id} name`
  }
}

export { makeApiTag as default }
