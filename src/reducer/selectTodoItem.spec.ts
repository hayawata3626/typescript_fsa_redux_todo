import { selectTodoItem } from "./selectTodoItem"
import { initialState, Todo, TodoAppState } from "../state/todoAppState"
import { todoReducer } from "./index"
import { TodoItemFactory } from "../factory"

describe("selectTodoItem", () => {
  let state: TodoAppState
  const todoItem: Todo = TodoItemFactory.build()

  beforeEach(() => {
    state = {
      ...initialState,
      todoList: {
        ...initialState.todoList,
        byId: {
          [todoItem.id]: todoItem
        }
      }
    }
    state = todoReducer(
      state,
      selectTodoItem({ id: todoItem.id, selected: true })
    )
  })

  it("todoItemのselectedがtrueになっていること", () => {
    expect(state.todoList.byId[todoItem.id].selected).toBe(true)
  })
})
