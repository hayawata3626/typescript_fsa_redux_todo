import { TodoAppState } from "../state/todoAppState"

type Payload = {}

export const openBulkEditModalReducer = (
  state: TodoAppState,
  {  }: Payload
): TodoAppState => {
  return {
    ...state,
    bulkEditModal: {
      ...state.bulkEditModal,
      open: true
    }
  }
}
