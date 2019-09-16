import { initialState, TodoAppState } from "../state/todoAppState"
import { todoReducer } from "./index"
import { changeTitleOfAddTodoModal } from "./changeTitleOfAddTodoModal"

describe("changeTitleOfAddTodoModal", () => {
  let state: TodoAppState

  beforeEach(() => {
    state = todoReducer(
      initialState,
      changeTitleOfAddTodoModal({ title: "髪を切る" })
    )
  })

  it("addTodoModalのtitleが入力した値になっていること", () => {
    expect(state.addTodoModal.title).toBe("髪を切る")
  })
})
