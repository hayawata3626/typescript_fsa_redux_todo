import { TodoAppState } from "../state/todoAppState"
import _ from "lodash"
import produce, { Draft } from "immer"
import { deprecated } from "typesafe-actions"
const { createStandardAction } = deprecated

type Payload = {
  id: number
  selected: boolean
}

export const changeSelect = createStandardAction("changeSelect")<Payload>()

export const changeSelectReducer = (
  state: TodoAppState,
  { payload: { id, selected } }: { payload: Payload }
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
