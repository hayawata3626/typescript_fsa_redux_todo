import { TodoAppState } from "../state/todoAppState"
import actionCreatorFactory from "typescript-fsa"

type Payload = {}

export const closeBulkEditModal = actionCreatorFactory()<Payload>(
  "closeBulkEditModal"
)

export const closeBulkEditModalReducer = (
  state: TodoAppState,
  {  }: Payload
): TodoAppState => {
  return {
    ...state,
    bulkEditModal: {
      ...state.bulkEditModal,
      open: false
    }
  }
}
