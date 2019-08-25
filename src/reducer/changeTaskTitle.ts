import { Todo, TodoAppState } from "../states/todoAppState"

type Payload = {
  id: number
  title: string
}

export const changeTaskTitleReducer = (
  state: TodoAppState,
  { id, title }: Payload
): TodoAppState => {
  return {
    ...state,
    todoList: filterAndChangeTodo(id, state.todoList, title)
  }
}

const filterAndChangeTodo = (
  id: number,
  list: ReadonlyArray<Todo>,
  title: string
): ReadonlyArray<Todo> =>
  list.map(item => {
    if (item.id === id) {
      return { ...item, title: title }
    } else {
      return item
    }
  })
