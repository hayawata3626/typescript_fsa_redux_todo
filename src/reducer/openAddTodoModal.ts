import { TodoAppState } from "../state/todoAppState"
import { deprecated } from "typesafe-actions"
const { createStandardAction } = deprecated

export const openAddTodoModal = createStandardAction("openAddTodoModal")<
  undefined
>()

export const openAddTodoModalReducer = (state: TodoAppState): TodoAppState => ({
  ...state,
  addTodoModal: {
    ...state.addTodoModal,
    open: true
  }
})
