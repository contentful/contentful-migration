import { invalidActionError } from '.';
import { EditorInterfaces } from '../../entities/content-type';
import { EditorLayoutMoveField } from '../../intent'
import { find as findEditorLayoutItem, isFieldGroupItem, isFieldItem } from '../../utils/editor-layout';

const VALID_MOVEMENT_DIRECTIONS = ['beforeField', 'afterField', 'beforeFieldGroup', 'afterFieldGroup', 'toTheTopOfFieldGroup', 'toTheBottomOfFieldGroup']
const RELATIVE_MOVEMENTS_PIVOT_REQUIRED = ['beforeField', 'afterField', 'beforeFieldGroup', 'afterFieldGroup'];
const RELATIVE_MOVEMENTS_FIELD_PIVOT = ['beforeField', 'afterField'];

export function editorInterfaceValidation(intents, allCTs, editorInterfaces: Map<String, EditorInterfaces>) {

  const checks = {
    'contentType/moveFieldInEditorLayout': (errors, intent) => {
      const moveIntent = (intent as EditorLayoutMoveField)
      const editorInterface = editorInterfaces.get(moveIntent.getContentTypeId())
      if (!moveIntent.getFieldId()) {
        errors.push(
          invalidActionError('Missing field id to be moved', intent)
        )
        return
      }
      if (!findEditorLayoutItem(editorInterface.getEditorLayout(), (item) => isFieldItem(item) && item.fieldId === moveIntent.getFieldId())) {
        errors.push(
          invalidActionError(`Field "${moveIntent.getFieldId()}" does not exist in editor layout`, intent)
        )
        return
      }

      if (!VALID_MOVEMENT_DIRECTIONS.includes(moveIntent.getDirection())) {
        errors.push(
          invalidActionError(`Invalid field movement direction "${moveIntent.getDirection()}"`, intent)
        )
      }

      if (RELATIVE_MOVEMENTS_PIVOT_REQUIRED.includes(moveIntent.getDirection()) && !moveIntent.getPivotId()) {
        errors.push(
          invalidActionError(`A pivot item must be provided`, intent)
        )
      }

      const pivotType = RELATIVE_MOVEMENTS_FIELD_PIVOT.includes(moveIntent.getDirection()) ? 'field' : 'field group'

      if (pivotType === 'field' && moveIntent.getFieldId() === moveIntent.getPivotId()) {
        errors.push(
          invalidActionError(`Field "${moveIntent.getFieldId()}" cannot be moved using itself as pivot`, intent)
        )
      }

      function findPivotAndParent() {
        let pivotItem
        let pivotParentItem

        findEditorLayoutItem(
          editorInterface.getEditorLayout(),
          (item) => {
            if (isFieldGroupItem(item)) {

              if (pivotType === 'field group' && item.groupId === moveIntent.getPivotId()) {
                pivotItem = item
                return true
              } else {
                pivotItem = item.items.find(childItem => {
                  return pivotType === 'field' ?
                    isFieldItem(childItem) && childItem.fieldId === moveIntent.getPivotId() :
                    isFieldGroupItem(childItem) && childItem.groupId === moveIntent.getPivotId()
                })

                if (pivotItem) {
                  pivotParentItem = item
                  return true
                }
              }
            }
          }
        )

        return [pivotItem, pivotParentItem]
      }

      if (moveIntent.getPivotId()) {
        const [pivotItem, pivotParentItem] = findPivotAndParent()

        if (!pivotItem) {
          errors.push(
            invalidActionError(`Field "${moveIntent.getFieldId()}" cannot be moved using ${pivotType} pivot "${moveIntent.getPivotId()}" does not exist`, intent)
          )
        } else if(!pivotParentItem){
          errors.push(
            invalidActionError(`Field "${moveIntent.getFieldId()}" cannot be moved using because ${pivotType} pivot "${moveIntent.getPivotId()}" is a top level group`, intent)
          )
        }
      }
    }
  }

  const errors = []
  for (const intent of intents) {
    if (intent.isEditorLayoutUpdate()) {
      checks[intent.getRawType()]?.(errors, intent, { allCTs, editorInterfaces })
    }
  }

  return errors
}