import { TodoAppState } from "../state/todoAppState"
import actionCreatorFactory from "typescript-fsa"
import produce, { Draft } from "immer"

type Payload = {
  checked: boolean
}

export const checkedChangeOfBulkEditModal = actionCreatorFactory()<Payload>(
  "checkedChangeOfBulkEditModal"
)

export const checkedChangeOfBulkEditModalReducer = (
  state: TodoAppState,
  { checked }: Payload
): TodoAppState =>
  produce(state, (draftState: Draft<TodoAppState>) => {
    draftState.bulkEditModal.done = checked
  })
