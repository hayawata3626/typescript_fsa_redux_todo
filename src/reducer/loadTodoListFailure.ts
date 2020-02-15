import { TodoAppState } from "../state/todoAppState"
import { deprecated } from "typesafe-actions"
const { createStandardAction } = deprecated

type Payload = {
  message: string
}

export const loadTodoListFailure = createStandardAction("loadTodoListFailure")<
  Payload
>()

export const loadTodoListFailureReducer = (
  state: TodoAppState,
  { payload: { message } }: { payload: Payload }
): TodoAppState => ({
  ...state,
  loading: false,
  errorSnackBar: {
    open: true,
    message: message
  }
})
