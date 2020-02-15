import { TodoAppState } from "../state/todoAppState"
import _ from "lodash"
import produce, { Draft } from "immer"
import { deprecated } from "typesafe-actions"
const { createStandardAction } = deprecated

export const decideAddTodo = createStandardAction("decideAddTodo")<undefined>()

export const decideAddTodoReducer = (state: TodoAppState): TodoAppState =>
  produce(state, (draftState: Draft<TodoAppState>) => {
    const addTodoId = _.takeRight(draftState.todoList.allIds)[0] + 1
    const title = draftState.addTodoModal.title

    draftState.todoList.byId[addTodoId] = {
      id: addTodoId,
      title: title,
      done: false,
      selected: false
    }

    draftState.todoList.allIds = [...draftState.todoList.allIds, addTodoId]

    draftState.addTodoModal = {
      ...draftState.addTodoModal,
      open: false,
      title: ""
    }
  })
