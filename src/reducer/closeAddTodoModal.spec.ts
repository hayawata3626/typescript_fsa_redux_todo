import { closeAddTodoModal } from "./closeAddTodoModal"
import { initialState, TodoAppState } from "../state/todoAppState"
import { todoReducer } from "./index"

describe("closeAddTodoModal", () => {
  let state: TodoAppState

  beforeEach(() => {
    state = todoReducer(initialState, closeAddTodoModal({}))
  })

  it("addTodoModalのopenがfalseになっていること", () => {
    expect(state.addTodoModal.open).toBe(false)
  })
})
