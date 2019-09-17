import actionCreatorFactory from "typescript-fsa"
import { TodoAppState } from "../state/todoAppState"
import produce, { Draft } from "immer"

type Payload = {
  title: string
}

export const changeTitleOfAddTodoModal = actionCreatorFactory()<Payload>(
  "changeTitleOfAddTodoModal"
)

export const changeTitleOfAddTodoModalReducer = (
  state: TodoAppState,
  { title }: Payload
): TodoAppState =>
  produce(state, (draftState: Draft<TodoAppState>) => {
    draftState.addTodoModal.title = title
  })
