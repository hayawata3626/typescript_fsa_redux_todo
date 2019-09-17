import { loadInitialDataStart } from "./loadInitialDataStart"
import { initialState, TodoAppState } from "../state/todoAppState"
import { todoReducer } from "./index"

describe("loadInitialDataStart", () => {
  let state: TodoAppState

  beforeEach(() => {
    state = todoReducer(initialState, loadInitialDataStart({}))
  })

  it("loadingがtrueになっていること", () => {
    expect(state.loading).toBe(true)
  })
})
