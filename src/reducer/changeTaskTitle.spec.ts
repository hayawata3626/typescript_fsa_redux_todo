import { changeTodoTitle, todoReducer } from "./index"
import { initialState, Todo, TodoAppState } from "../state/todoAppState"
import { TodoItemFactory } from "../test"

describe("changeTaskTitle", () => {
  let state: TodoAppState
  const todoItem: Todo = TodoItemFactory.build()

  beforeEach(() => {
    state = {
      ...initialState,
      todoList: {
        ...initialState.todoList,
        byId: {
          ...initialState.todoList.byId,
          [todoItem.id]: todoItem
        }
      }
    }
    state = todoReducer(
      initialState,
      changeTodoTitle({ id: todoItem.id, title: todoItem.title })
    )
  })

  it("titleが入力した値になっていること", () => {
    expect(state.todoList.byId[todoItem.id].title).toBe(todoItem.title)
  })
})
