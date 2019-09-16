import { changeTitleOfBulkEditModal } from "./changeTitleOfBulkEditModal"
import { initialState, TodoAppState } from "../state/todoAppState"
import { todoReducer } from "./index"

describe("changeTitleOfBulkEditModal", () => {
  let state: TodoAppState

  beforeEach(() => {
    state = todoReducer(
      initialState,
      changeTitleOfBulkEditModal({ text: "映画を観にいく" })
    )
  })

  it("bulkEditModalのtitleが入力された値になっていること", () => {
    expect(state.bulkEditModal.title).toBe("映画を観にいく")
  })
})
