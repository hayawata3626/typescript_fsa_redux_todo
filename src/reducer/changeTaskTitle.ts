import { TodoAppState } from "../state/todoAppState"

type Payload = {
  id: number
  title: string
}

export const changeTaskTitleReducer = (
  state: TodoAppState,
  { id, title }: Payload
): TodoAppState => ({
  ...state,
  todoList: {
    ...state.todoList,
    byId: {
      ...state.todoList.byId,
      [id]: {
        ...state.todoList.byId[id],
        title: title
      }
    }
  }
})
