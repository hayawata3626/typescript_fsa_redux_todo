import actionCreatorFactory from "typescript-fsa"
import { TodoAppState, TodoById } from "../state/todoAppState"

type Payload = {
  todoList: TodoById
}

export const loadInitialDataSuccess = actionCreatorFactory()<Payload>(
  "loadInitialDataSuccess"
)

export const loadInitialDataReducer = (
  state: TodoAppState,
  { todoList }: Payload
): TodoAppState => {
  return {
    ...state,
    todoList: {
      ...state.todoList,
      byId: todoList
    },
    loading: false
  }
}
