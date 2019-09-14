import actionCreatorFactory from "typescript-fsa"
import { TodoAppState, TodoById } from "../state/todoAppState"
import { fromArrayToObject } from "../util/fromArrayToObject"

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
    }
  }
}
