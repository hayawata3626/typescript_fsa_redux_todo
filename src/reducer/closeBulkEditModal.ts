import { TodoAppState } from "../state/todoAppState"

type Payload = {}

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
