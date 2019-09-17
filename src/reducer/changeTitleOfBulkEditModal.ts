import { TodoAppState } from "../state/todoAppState"
import actionCreatorFactory from "typescript-fsa"
import produce, { Draft } from "immer"

type Payload = {
  text: string
}

export const changeTitleOfBulkEditModal = actionCreatorFactory()<Payload>(
  "changeTitleOfBulkEditModal"
)

export const changeTitleOfBulkEditModalReducer = (
  state: TodoAppState,
  { text }: Payload
): TodoAppState =>
  produce(state, (draftState: Draft<TodoAppState>) => {
    draftState.bulkEditModal.title = text
  })
