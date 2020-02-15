import { TodoAppState } from "../state/todoAppState"
import { deprecated } from "typesafe-actions"
const { createStandardAction } = deprecated

export const openBulkEditModal = createStandardAction("openBulkEditModal")<
  undefined
>()

export const openBulkEditModalReducer = (
  state: TodoAppState
): TodoAppState => ({
  ...state,
  bulkEditModal: {
    ...state.bulkEditModal,
    open: true
  }
})
