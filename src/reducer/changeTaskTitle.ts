import { TodoAppState } from "../state/todoAppState"
import { actionCreator } from "../actions/todoAppActions"

type Payload = {
  id: number
  title: string
}

export const changeTodoTitle = actionCreator<Payload>("CHANGE_TODO_TITLE")

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
