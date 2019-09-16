import { changeTitleOfAddTodoModal } from "./changeTitleOfAddTodoModal"
import { initialState, TodoAppState } from "../state/todoAppState"
import { todoReducer } from "./index"

describe("changeTitleOfAddTodoModal", () => {
  let state: TodoAppState

  beforeEach(() => {
    state = todoReducer(
      initialState,
      changeTitleOfAddTodoModal({ title: "髪を切る" })
    )
  })

  it("になっていること", () => {
    expect(state.addTodoModal.title).toBe("髪を切る")
  })
})
