import { TodoAppState } from "../state/todoAppState"

type Payload = {
  text: string
}

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
