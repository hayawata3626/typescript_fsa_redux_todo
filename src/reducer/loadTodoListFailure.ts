import actionCreatorFactory from "typescript-fsa"
import { TodoAppState } from "../state/todoAppState"

type Payload = {
  message: string
}

export const loadTodoListFailure = actionCreatorFactory()<Payload>(
  "loadTodoListFailure"
)

export const loadTodoListFailureReducer = (
  state: TodoAppState,
  { message }: Payload
): TodoAppState => ({
  ...state,
  loading: false,
  errorSnackBar: {
    open: true,
    message: message
  }
})
