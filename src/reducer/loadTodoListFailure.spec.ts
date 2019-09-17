import { loadTodoListFailure } from "./loadTodoListFailure"
import { initialState, TodoAppState } from "../state/todoAppState"
import { todoReducer } from "./index"

describe("loadTodoListFailure", () => {
  let state: TodoAppState

  beforeEach(() => {
    state = todoReducer(
      initialState,
      loadTodoListFailure({ message: "通信に失敗しました" })
    )
  })

  it("errorSnackBarのmessageが入力した値になっていること", () => {
    expect(state.errorSnackBar.message).toBe("通信に失敗しました")
  })
})
