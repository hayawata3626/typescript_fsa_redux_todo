import { TodoAppState } from "../state/todoAppState"
import { deprecated } from "typesafe-actions"
const { createStandardAction } = deprecated

export const loadTodoListStart = createStandardAction("loadTodoListStart")<
  undefined
>()

export const loadTodoListStartReducer = (
  state: TodoAppState
): TodoAppState => ({
  ...state,
  loading: true
})
