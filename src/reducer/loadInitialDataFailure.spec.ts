import { loadInitialDataFailure } from "./loadInitialDataFailure"
import { initialState, TodoAppState } from "../state/todoAppState"
import { todoReducer } from "./index"

describe("loadInitialDataFailure", () => {
  let state: TodoAppState

  beforeEach(() => {
    state = todoReducer(
      initialState,
      loadInitialDataFailure({ errorMessage: "通信失敗しました" })
    )
  })

  it("errorSnackBarのmessageが入力した値になっていること", () => {
    expect(state.errorSnackBar.message).toBe("通信失敗しました")
  })
})
