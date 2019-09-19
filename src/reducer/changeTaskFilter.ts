import { FilterType, TodoAppState } from "../state/todoAppState"
import actionCreatorFactory from "typescript-fsa"
import produce, { Draft } from "immer"

type Payload = {
  filterType: FilterType
}

export const changeTaskFilter = actionCreatorFactory()<Payload>(
  "changeTaskFilter"
)

export const changeTaskFilterReducer = (
  state: TodoAppState,
  { filterType }: Payload
): TodoAppState => {
  console.log(filterType, "filterType")
  return produce(state, (draftState: Draft<TodoAppState>) => {
    draftState.filterType = filterType
  })
}
