import { changeSelect } from "./changeSelect"
import { initialState, Todo, TodoAppState } from "../state/todoAppState"
import { todoReducer } from "./index"
import { TodoItemFactory } from "../test"

describe("changeSelect", () => {
  const todoItem: Todo = TodoItemFactory.build()
  let state: TodoAppState

  beforeEach(() => {
    state = {
      ...initialState,
      todoList: {
        ...initialState.todoList,
        byId: {
          [todoItem.id]: {
            ...initialState.todoList.byId[todoItem.id]
          }
        }
      }
    }
    state = todoReducer(
      state,
      changeSelect({ id: todoItem.id, selected: true })
    )
  })

  it("todoItemのselectedがtrueになっていること", () => {
    expect(state.todoList.byId[todoItem.id].selected).toBe(true)
  })
})
