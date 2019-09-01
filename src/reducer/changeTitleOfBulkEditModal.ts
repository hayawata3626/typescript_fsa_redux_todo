import { TodoAppState } from "../state/todoAppState"
import actionCreatorFactory from "typescript-fsa"

type Payload = {
  text: string
}

export const changeTitleOfBulkEditModal = actionCreatorFactory()<Payload>(
  "changeTitleOfBulkEditModal"
)

export const changeTitleOfBulkEditModalReducer = (
  state: TodoAppState,
  { text }: Payload
): TodoAppState => ({
  ...state,
  bulkEditModal: {
    ...state.bulkEditModal,
    title: text
  }
})
