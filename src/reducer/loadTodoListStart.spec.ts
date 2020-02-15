import { loadTodoListStart } from "./loadTodoListStart"
import { initialState, TodoAppState } from "../state/todoAppState"
import { todoReducer } from "./index"

describe("loadTodoListStart", () => {
  let state: TodoAppState

  beforeEach(() => {
    state = todoReducer(initialState, loadTodoListStart())
  })

  it("loadingがtrueになっていること", () => {
    expect(state.loading).toBe(true)
  })
})
