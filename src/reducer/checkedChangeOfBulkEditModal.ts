import { TodoAppState } from "../state/todoAppState"
import actionCreatorFactory from "typescript-fsa"

type Payload = {
  selected: boolean
}

export const checkedChangeOfBulkEditModal = actionCreatorFactory()<Payload>(
  "checkedChangeOfBulkEditModal"
)

export const checkedChangeOfBulkEditModalReducer = (
  state: TodoAppState,
  { selected }: Payload
): TodoAppState => ({
  ...state,
  bulkEditModal: {
    ...state.bulkEditModal,
    done: selected
  }
})
