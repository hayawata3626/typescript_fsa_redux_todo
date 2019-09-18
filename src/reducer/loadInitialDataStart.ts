import { TodoAppState } from "../state/todoAppState"
import actionCreatorFactory from "typescript-fsa"
import produce, { Draft } from "immer"

type Payload = {}

export const loadInitialDataStart = actionCreatorFactory()<Payload>(
  "loadInitialDataStart"
)

export const loadInitialDataStartReducer = (
  state: TodoAppState
): TodoAppState =>
  produce(state, (draftState: Draft<TodoAppState>) => {
    draftState.loading = true
  })
