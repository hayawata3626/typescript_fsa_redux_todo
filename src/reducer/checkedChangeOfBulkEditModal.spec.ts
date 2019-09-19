import { checkedChangeOfBulkEditModal } from "./checkedChangeOfBulkEditModal"
import { initialState, TodoAppState } from "../state/todoAppState"
import { todoReducer } from "./index"

describe("checkedChangeOfBulkEditModal", () => {
  let state: TodoAppState

  beforeEach(() => {
    state = todoReducer(
      initialState,
      checkedChangeOfBulkEditModal({ checked: true })
    )
  })

  it("bulkEditModalのdoneがtrueになっていること", () => {
    expect(state.bulkEditModal.done).toBe(true)
  })
})
