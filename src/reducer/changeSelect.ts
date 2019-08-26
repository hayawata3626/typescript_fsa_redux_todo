import { Todo, TodoAppState } from "../states/todoAppState"

type Payload = {
  id: number
  selected: boolean
}

export const changeSelect = (
  state: TodoAppState,
  { id, selected }: Payload
): TodoAppState => {
  return {
    ...state,
    todoList: filterAndChangeTodo(id, state.todoList, selected)
  }
}

const filterAndChangeTodo = (
  id: number,
  list: ReadonlyArray<Todo>,
  selected: boolean
): ReadonlyArray<Todo> =>
  list.map(item => {
    if (item.id === id) {
      return { ...item, selected: selected }
    } else {
      return item
    }
  })
