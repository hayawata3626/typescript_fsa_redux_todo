import { TodoAppState } from "../state/todoAppState"
import { deprecated } from "typesafe-actions"
const { createStandardAction } = deprecated

type Payload = {
  todoId: number
}

export const loadTodoListSuccess = createStandardAction("loadTodoListSuccess")<
  Payload
>()

export const loadTodoListSuccessReducer = (
  state: TodoAppState,
  { payload: { todoId } }: { payload: Payload }
): TodoAppState => ({
  ...state,
  todoList: {
    ...state.todoList,
    byId: {
      ...state.todoList.byId,
      [todoId]: {
        ...state.todoList.byId[todoId]
      }
    }
  },
  loading: false
})
