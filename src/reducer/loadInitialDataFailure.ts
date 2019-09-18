import { TodoAppState } from "../state/todoAppState"
import actionCreatorFactory from "typescript-fsa"
import produce, { Draft } from "immer"

type Payload = {
  errorMessage: string
}

export const loadInitialDataFailure = actionCreatorFactory()<Payload>(
  "loadInitialDataFailure"
)

export const loadInitialDataFailureReducer = (
  state: TodoAppState,
  { errorMessage }: Payload
): TodoAppState =>
  produce(state, (draftState: Draft<TodoAppState>) => {
    draftState.errorSnackBar = {
      open: true,
      message: errorMessage
    }
  })
