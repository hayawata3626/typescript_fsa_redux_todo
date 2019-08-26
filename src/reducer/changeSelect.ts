import { TodoAppState } from "../state/todoAppState"

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
  }
})
