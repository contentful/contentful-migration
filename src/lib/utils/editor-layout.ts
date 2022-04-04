export const MIN_GROUPS = 2
export const MAX_TABS = 5
export const MAX_FIELD_SETS = 15

export interface FieldGroupItem {
  groupId: string
  name?: string
  items: EditorLayoutItem[]
}

export interface FieldItem {
  fieldId: string
}

type EditorLayoutItem = FieldItem | FieldGroupItem

export type EditorLayout = EditorLayoutItem[]

type Path = (string | number)[]

export function isFieldGroupItem (item: EditorLayoutItem): item is FieldGroupItem {
  return Boolean((item as FieldGroupItem).groupId)
}

export function isFieldItem (item: EditorLayoutItem): item is FieldItem {
  return Boolean((item as FieldItem).fieldId)
}

export const findFieldGroup = (editorLayout: FieldGroupItem[], groupId: string) => {
  const result = find<FieldGroupItem>(
    editorLayout,
    (item: EditorLayoutItem) => isFieldGroupItem(item) && item.groupId === groupId
  )

  if (result) {
    return {
      ...result,
      item: result.item
    }
  }
}

export const collectFieldGroupIds = (editorLayout: FieldGroupItem[]) => {
  const fieldGroupIds: string[] = []

  visitEditorLayout(editorLayout, (item) => {
    if (isFieldGroupItem(item)) {
      fieldGroupIds.push(item.groupId)
    }
  })

  return fieldGroupIds
}

function visitEditorLayout (editorLayout: EditorLayoutItem[], cb: (item: EditorLayoutItem) => void) {
  for (const currentItem of editorLayout) {
    cb(currentItem)

    if (isFieldGroupItem(currentItem)) {
      visitEditorLayout(currentItem.items, cb)
    }
  }
}

export function find<ItemType = EditorLayoutItem> (
  editorLayout: FieldGroupItem[],
  predicate: (item: EditorLayoutItem) => boolean
): { item: ItemType; path: Path } | undefined {
  const findIt = (list: EditorLayoutItem[], path: Path) => {
    for (const [index, item] of list.entries()) {
      if (predicate(item)) {
        return { path: [...path, index], item: list[index] }
      }
      if (isFieldGroupItem(item)) {
        const result = findIt(item.items, [...path, index, 'items'])
        if (result) {
          return result
        }
      }
    }
  }

  const foundItem = findIt(editorLayout, [])
  if (foundItem) {
    return {
      ...foundItem,
      path: foundItem.path
    }
  }
}
