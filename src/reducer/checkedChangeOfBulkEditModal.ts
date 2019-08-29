import { TodoAppState } from "../state/todoAppState"

type Payload = {
  selected: boolean
}

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
