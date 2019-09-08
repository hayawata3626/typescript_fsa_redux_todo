import { TodoAppState } from "../state/todoAppState"
import actionCreatorFactory from "typescript-fsa"

type Payload = {}

export const openBulkEditModal = actionCreatorFactory()<Payload>(
  "openBulkEditModal"
)

export const openBulkEditModalReducer = (
  state: TodoAppState,
  {  }: Payload
): TodoAppState => ({
  ...state,
  bulkEditModal: {
    ...state.bulkEditModal,
    open: true
  }
})
