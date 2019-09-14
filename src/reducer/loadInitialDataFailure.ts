import { loadInitialDataSuccess } from "./loadInitialDataSuccess"
import { TodoAppState } from "../state/todoAppState"
import actionCreatorFactory from "typescript-fsa"

type Payload = {
  errorMessage: string
}

export const loadInitialDataFailure = actionCreatorFactory()<Payload>(
  "loadInitialDataFailure"
)

export const loadInitialDataFailureReducer = (
  state: TodoAppState,
  { errorMessage }: Payload
): TodoAppState => ({
  ...state,
  errorSnackBar: {
    ...state.errorSnackBar,
    open: true,
    message: errorMessage
  }
})
