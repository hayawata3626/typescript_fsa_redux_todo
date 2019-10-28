import { changeSelect } from "./changeSelect"
import { initialState, Todo, TodoAppState } from "../state/todoAppState"
import { todoReducer } from "./index"
import { TodoItemFactory } from "../factory"

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

  it("todoItemのdoneがtrueになっていること", () => {
    expect(state.todoList.byId[todoItem.id].done).toBe(true)
  })
})
