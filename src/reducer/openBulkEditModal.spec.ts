import { openBulkEditModal } from "./openBulkEditModal"
import { initialState, TodoAppState } from "../state/todoAppState"
import { todoReducer } from "./index"

describe("openBulkEditModal", () => {
  let state: TodoAppState

  beforeEach(() => {
    state = todoReducer(initialState, openBulkEditModal())
  })

  it("bulkEditModalのopenがtrueになっていること", () => {
    expect(state.bulkEditModal.open).toBe(true)
  })
})
