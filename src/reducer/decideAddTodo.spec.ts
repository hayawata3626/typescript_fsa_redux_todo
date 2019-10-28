import { decideAddTodo } from "./decideAddTodo"
import { initialState, Todo, TodoAppState } from "../state/todoAppState"
import { todoReducer } from "./index"
import { TodoItemFactory } from "../factory"

describe("decideAddTodo", () => {
  const todo: Todo = TodoItemFactory.build()
  const addTodoModalTitle = "銀行へ行く"
  let state: TodoAppState

  beforeEach(() => {
    state = {
      ...initialState,
      todoList: {
        ...initialState.todoList,
        byId: {
          ...initialState.todoList.byId,
          [todo.id]: todo
        },
        allIds: [todo.id]
      },
      addTodoModal: {
        ...initialState.addTodoModal,
        title: addTodoModalTitle
      }
    }
    state = todoReducer(state, decideAddTodo({}))
  })

  it("todoListのbyIdに入力した値が入っていること", () => {
    expect(state.todoList.byId[todo.id]).toEqual(todo)
  })

  it("追加されたtodoListのbyIdのtitleが入力した値になっていること", () => {
    expect(state.todoList.byId[todo.id + 1].title).toBe(addTodoModalTitle)
  })
})
