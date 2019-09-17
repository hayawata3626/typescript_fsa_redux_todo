import { TodoAppState } from "../state/todoAppState"
import actionCreatorFactory from "typescript-fsa"
import produce, { Draft } from "immer"

type Payload = {
  selected: boolean
}

export const checkedChangeOfBulkEditModal = actionCreatorFactory()<Payload>(
  "checkedChangeOfBulkEditModal"
)

export const checkedChangeOfBulkEditModalReducer = (
  state: TodoAppState,
  { selected }: Payload
): TodoAppState =>
  produce(state, (draftState: Draft<TodoAppState>) => {
    draftState.bulkEditModal.done = selected
  })
