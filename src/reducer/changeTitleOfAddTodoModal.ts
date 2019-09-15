import actionCreatorFactory from "typescript-fsa"
import { TodoAppState } from "../state/todoAppState"

type Payload = {
  title: string
}

export const changeTitleOfAddTodoModal = actionCreatorFactory()<Payload>(
  "changeTitleOfAddTodoModal"
)

export const changeTitleOfAddTodoModalReducer = (
  state: TodoAppState,
  { title }: Payload
): TodoAppState => ({
  ...state,
  addTodoModal: {
    ...state.addTodoModal,
    title: title
  }
})
