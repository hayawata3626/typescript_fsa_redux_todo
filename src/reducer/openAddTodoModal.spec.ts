import { openAddTodoModal } from "./openAddTodoModal"
import { initialState, TodoAppState } from "../state/todoAppState"
import { todoReducer } from "./index"

describe("openAddTodoModal", () => {
  let state: TodoAppState

  beforeEach(() => {
    state = todoReducer(initialState, openAddTodoModal({}))
  })

  it("addTodoModalのopenがtrueになっていること", () => {
    expect(state.addTodoModal.open).toBe(true)
  })
})
