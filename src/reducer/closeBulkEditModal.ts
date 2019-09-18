import { TodoAppState } from "../state/todoAppState"
import actionCreatorFactory from "typescript-fsa"
import _ from "lodash"
import { fromArrayToObject } from "../util/fromArrayToObject"
import produce, { Draft } from "immer"

type Payload = {}

export const closeBulkEditModal = actionCreatorFactory()<Payload>(
  "closeBulkEditModal"
)

export const closeBulkEditModalReducer = (state: TodoAppState): TodoAppState =>
  produce(state, (draftState: Draft<TodoAppState>) => {
    draftState.todoList.byId = fromArrayToObject(
      _.map(draftState.todoList.byId, todo => ({ ...todo, selected: false }))
    )
    draftState.bulkEditModal.open = false
  })
