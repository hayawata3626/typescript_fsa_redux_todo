import { TodoAppState } from "../state/todoAppState"
import produce, { Draft } from "immer"
import { deprecated } from "typesafe-actions"
const { createStandardAction } = deprecated

type Payload = {
  errorMessage: string
}

export const loadInitialDataFailure = createStandardAction(
  "loadInitialDataFailure"
)<Payload>()

export const loadInitialDataFailureReducer = (
  state: TodoAppState,
  { payload: { errorMessage } }: { payload: Payload }
): TodoAppState =>
  produce(state, (draftState: Draft<TodoAppState>) => {
    draftState.errorSnackBar = {
      open: true,
      message: errorMessage
    }
  })
