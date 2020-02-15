import { TodoAppState } from "../state/todoAppState"
import produce, { Draft } from "immer"
import { deprecated } from "typesafe-actions"
const { createStandardAction } = deprecated

type Payload = {
  text: string
}

export const changeTitleOfBulkEditModal = createStandardAction(
  "changeTitleOfBulkEditModal"
)<Payload>()

export const changeTitleOfBulkEditModalReducer = (
  state: TodoAppState,
  { payload: { text } }: { payload: Payload }
): TodoAppState =>
  produce(state, (draftState: Draft<TodoAppState>) => {
    draftState.bulkEditModal.title = text
  })
