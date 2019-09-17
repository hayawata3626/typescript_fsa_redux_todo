import actionCreatorFactory from "typescript-fsa"
import { TodoAppState } from "../state/todoAppState"
import produce, { Draft } from "immer"

type Payload = {}

export const closeAddTodoModal = actionCreatorFactory()<Payload>(
  "closeAddTodoModal"
)

export const closeAddTodoModalReducer = (
  state: TodoAppState,
  {  }: Payload
): TodoAppState =>
  produce(state, (draftState: Draft<TodoAppState>) => {
    draftState.addTodoModal.open = false
  })
