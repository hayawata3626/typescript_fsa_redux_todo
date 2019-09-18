import actionCreatorFactory from "typescript-fsa"
import { TodoAppState } from "../state/todoAppState"

type Payload = {
  todoId: number
}

export const loadTodoListSuccess = actionCreatorFactory()<Payload>(
  "loadTodoListSuccess"
)

export const loadTodoListSuccessReducer = (
  state: TodoAppState,
  { todoId }: Payload
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
