import { FilterType, TodoAppState } from "../state/todoAppState"
import produce, { Draft } from "immer"
import { deprecated } from "typesafe-actions"
const { createStandardAction } = deprecated

type Payload = {
  filterType: FilterType
}

export const changeTaskFilter = createStandardAction("changeTaskFilter")<
  Payload
>()

export const changeTaskFilterReducer = (
  state: TodoAppState,
  { payload: { filterType } }: { payload: Payload }
): TodoAppState =>
  produce(state, (draftState: Draft<TodoAppState>) => {
    draftState.filterType = filterType
  })
