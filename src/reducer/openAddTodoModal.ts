import actionCreatorFactory from "typescript-fsa"
import { TodoAppState } from "../state/todoAppState"

type Payload = {}

export const openAddTodoModal = actionCreatorFactory()<Payload>(
  "openAddTodoModal"
)

export const openAddTodoModalReducer = (
  state: TodoAppState,
  {  }: Payload
): TodoAppState => ({
  ...state,
  addTodoModal: {
    ...state.addTodoModal,
    open: true
  }
})
