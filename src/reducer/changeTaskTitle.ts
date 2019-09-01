import { TodoAppState } from "../state/todoAppState"
import actionCreatorFactory from "typescript-fsa"

type Payload = {
  id: number
  title: string
}

export const changeTodoTitle = actionCreatorFactory()<Payload>(
  "changeTodoTitle"
)

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
