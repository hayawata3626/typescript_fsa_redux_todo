import actionCreatorFactory from "typescript-fsa"
import { TodoAppState } from "../state/todoAppState"

type Payload = {}

export const loadTodoListFailure = actionCreatorFactory()<Payload>(
  "loadTodoListFailure"
)

export const loadTodoListFailureReducer = (
  state: TodoAppState,
  {  }: Payload
): TodoAppState => {
  return {
    ...state,
    loading: false
  }
}
