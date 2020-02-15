import { TodoAppState } from "../state/todoAppState"
import produce, { Draft } from "immer"
import { deprecated } from "typesafe-actions"
const { createStandardAction } = deprecated

export const closeAddTodoModal = createStandardAction("closeAddTodoModal")<
  undefined
>()

export const closeAddTodoModalReducer = (state: TodoAppState): TodoAppState =>
  produce(state, (draftState: Draft<TodoAppState>) => {
    draftState.addTodoModal.title = ""
    draftState.addTodoModal.open = false
  })
