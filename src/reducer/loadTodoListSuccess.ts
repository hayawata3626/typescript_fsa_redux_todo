import actionCreatorFactory from "typescript-fsa"
import { TodoAppState } from "../state/todoAppState"

type Payload = {}

export const loadTodoListSuccess = actionCreatorFactory()<Payload>(
  "loadTodoListSuccess"
)

export const loadTodoListSuccessReducer = (
  state: TodoAppState,
  { result }: any
): TodoAppState => {
  console.log(result, result)
  return {
    ...state,
    loading: false
  }
}
