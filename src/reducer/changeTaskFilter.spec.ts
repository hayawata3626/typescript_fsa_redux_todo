import { changeTaskFilter } from "./changeTaskFilter"
import { FilterType, initialState, TodoAppState } from "../state/todoAppState"
import { todoReducer } from "./index"

describe("changeTaskFilter", () => {
  let state: TodoAppState

  beforeEach(() => {
    state = todoReducer(
      initialState,
      changeTaskFilter({ filterType: FilterType.Complete })
    )
  })

  it("filterTypeが入力した値になっていること", () => {
    expect(state.filterType).toBe(FilterType.Complete)
  })
})
