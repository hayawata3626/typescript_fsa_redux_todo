import { TodoAppState } from "../state/todoAppState"
import _ from "lodash"

type Payload = {
  id: number
  selected: boolean
}

export const changeSelect = (
  state: TodoAppState,
  { id, selected }: Payload
): TodoAppState => ({
  ...state,
  todoList: {
    ...state.todoList,
    byId: {
      ...state.todoList.byId,
      [id]: {
        ...state.todoList.byId[id],
        selected: selected
      }
    }
  },
  selectedTodoIds: filterTodoIds(id, selected, state.selectedTodoIds)
})

const filterTodoIds = (
  id: number,
  selected: boolean,
  previousSelectedIds: ReadonlyArray<number>
): ReadonlyArray<number> => {
  return selected
    ? _.unionBy([...previousSelectedIds, id])
    : _.remove(previousSelectedIds, id)
}
