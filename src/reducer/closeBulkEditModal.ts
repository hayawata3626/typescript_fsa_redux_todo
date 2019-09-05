import { TodoAppState } from "../state/todoAppState"
import actionCreatorFactory from "typescript-fsa"
import _ from "lodash"
import { fromArrayToObject } from "../util/fromArrayToObject"

type Payload = {}

export const closeBulkEditModal = actionCreatorFactory()<Payload>(
  "closeBulkEditModal"
)

export const closeBulkEditModalReducer = (
  state: TodoAppState,
  {  }: Payload
): TodoAppState => {
  return {
    ...state,
    todoList: {
      ...state.todoList,
      byId: fromArrayToObject(
        _.map(state.todoList.byId, todo => ({ ...todo, selected: false }))
      )
    },
    bulkEditModal: {
      ...state.bulkEditModal,
      open: false
    }
  }
}
