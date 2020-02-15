import { closeBulkEditModal } from "./closeBulkEditModal"
import { initialState, TodoAppState } from "../state/todoAppState"
import { todoReducer } from "./index"

describe("closeBulkEditModal", () => {
  let state: TodoAppState

  beforeEach(() => {
    state = todoReducer(initialState, closeBulkEditModal())
  })

  it("bulkEditModalのopenがfalseになっていること", () => {
    expect(state.bulkEditModal.open).toBe(false)
  })
})
