import { TodoAppState } from "../state/todoAppState"
import _ from "lodash"
import actionCreatorFactory from "typescript-fsa"
import produce, { Draft } from "immer"

type Payload = {
  id: number
  selected: boolean
}

export const changeSelect = actionCreatorFactory()<Payload>("changeSelect")

export const changeSelectReducer = (
  state: TodoAppState,
  { id, selected }: Payload
): TodoAppState =>
  produce(state, (draftState: Draft<TodoAppState>) => {
    draftState.todoList.byId[id].done = selected
    draftState.selectedTodoIds = filterTodoIds(
      id,
      selected,
      draftState.selectedTodoIds
    )
  })

const filterTodoIds = (
  id: number,
  selected: boolean,
  previousSelectedIds: number[]
): number[] =>
  selected
    ? _.unionBy([...previousSelectedIds, id])
    : _.remove(previousSelectedIds, id)
