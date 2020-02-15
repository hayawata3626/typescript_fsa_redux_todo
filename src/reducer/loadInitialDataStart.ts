import { TodoAppState } from "../state/todoAppState"
import produce, { Draft } from "immer"
import { deprecated } from "typesafe-actions"
const { createStandardAction } = deprecated

export const loadInitialDataStart = createStandardAction(
  "loadInitialDataStart"
)<undefined>()

export const loadInitialDataStartReducer = (
  state: TodoAppState
): TodoAppState =>
  produce(state, (draftState: Draft<TodoAppState>) => {
    draftState.loading = true
  })
