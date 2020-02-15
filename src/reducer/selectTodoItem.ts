import { TodoAppState } from "../state/todoAppState"
import produce, { Draft } from "immer"
import _ from "lodash"
import { deprecated } from "typesafe-actions"
const { createStandardAction } = deprecated

type Payload = {
  id: number
  selected: boolean
}

export const selectTodoItem = createStandardAction("selectTodoItem")<Payload>()

export const selectTodoItemReducer = (
  state: TodoAppState,
  { payload: { id, selected } }: { payload: Payload }
): TodoAppState =>
  produce(state, (draftState: Draft<TodoAppState>) => {
    draftState.todoList.byId[id].selected = selected
    draftState.selectedTodoIds = selected
      ? _.unionBy([...draftState.selectedTodoIds, id])
      : _.remove(draftState.selectedTodoIds, selectedId => selectedId !== id)
  })
