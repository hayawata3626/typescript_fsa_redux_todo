import { decideBulkModal } from "./decideBulkModal"
import { initialState, TodoAppState, TodoById } from "../state/todoAppState"
import { todoReducer } from "./index"
import { TodoItemFactory } from "../factory"
import { fromArrayToObject } from "../util/fromArrayToObject"
import _ from "lodash"
import produce, { Draft } from "immer"

describe("decideBulkModal", () => {
  const todoById: TodoById = fromArrayToObject(
    TodoItemFactory.buildList(2, { selected: true })
  )

  let state: TodoAppState

  beforeEach(() => {
    state = produce(initialState, (draftState: Draft<TodoAppState>) => {
      draftState.todoList.byId = todoById
      draftState.bulkEditModal.title = "ラーメン食べる"
      draftState.bulkEditModal.done = true
      draftState.selectedTodoIds = _.keys(todoById).map(id => _.toNumber(id))
    })
    state = todoReducer(state, decideBulkModal({}))
  })

  it("bulkEditModalのopenがfalseになっていること", () => {
    expect(state.bulkEditModal.open).toBe(false)
  })

  it("bulkEditModalのtitleが空になっていること", () => {
    expect(state.bulkEditModal.title).toBe("")
  })

  it("bulkEditModalのdoneが空になっていること", () => {
    expect(state.bulkEditModal.done).toBe(false)
  })

  it("todoListに入力した値が入っていること", () => {
    expect(state.todoList.byId).toEqual({
      1: {
        id: 1,
        done: true,
        selected: false,
        title: "ラーメン食べる"
      },
      2: {
        id: 2,
        done: true,
        selected: false,
        title: "ラーメン食べる"
      }
    })
  })
})
