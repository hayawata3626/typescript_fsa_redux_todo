import { TodoAppState } from "../state/todoAppState"
import produce, { Draft } from "immer"
import { deprecated } from "typesafe-actions"
const { createStandardAction } = deprecated

type Payload = {
  checked: boolean
}

export const checkedChangeOfBulkEditModal = createStandardAction(
  "checkedChangeOfBulkEditModal"
)<Payload>()

export const checkedChangeOfBulkEditModalReducer = (
  state: TodoAppState,
  { payload: { checked } }: { payload: Payload }
): TodoAppState =>
  produce(state, (draftState: Draft<TodoAppState>) => {
    draftState.bulkEditModal.done = checked
  })
