import { TodoAppState } from "../state/todoAppState"
import produce, { Draft } from "immer"
import actionCreatorFactory from "typescript-fsa"

type Payload = {
  id: number
  selected: boolean
}

export const selectTodoItem = actionCreatorFactory()<Payload>("selectTodoItem")

export const selectTodoItemReducer = (
  state: TodoAppState,
  { id, selected }: Payload
): TodoAppState =>
  produce(state, (draftState: Draft<TodoAppState>) => {
    draftState.todoList.byId[id].selected = selected
  })
