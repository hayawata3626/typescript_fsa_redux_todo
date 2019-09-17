import { TodoAppState } from "../state/todoAppState"
import actionCreatorFactory from "typescript-fsa"
import produce, { Draft } from "immer"

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
): TodoAppState =>
  produce(state, (draftState: Draft<TodoAppState>) => {
    draftState.todoList.byId[id].title = title
  })
