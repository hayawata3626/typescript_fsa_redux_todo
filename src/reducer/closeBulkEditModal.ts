import { TodoAppState } from "../state/todoAppState"
import _ from "lodash"
import { fromArrayToObject } from "../util/fromArrayToObject"
import produce, { Draft } from "immer"
import { deprecated } from "typesafe-actions"
const { createStandardAction } = deprecated

export const closeBulkEditModal = createStandardAction("closeBulkEditModal")<
  undefined
>()

export const closeBulkEditModalReducer = (state: TodoAppState): TodoAppState =>
  produce(state, (draftState: Draft<TodoAppState>) => {
    draftState.todoList.byId = fromArrayToObject(
      _.map(draftState.todoList.byId, todo => ({ ...todo, selected: false }))
    )
    draftState.bulkEditModal.open = false
  })
