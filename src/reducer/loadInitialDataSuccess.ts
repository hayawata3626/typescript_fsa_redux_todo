import { TodoAppState, TodoById } from "../state/todoAppState"
import _ from "lodash"
import produce, { Draft } from "immer"
import { deprecated } from "typesafe-actions"
const { createStandardAction } = deprecated

type Payload = {
  todoList: TodoById
}

export const loadInitialDataSuccess = createStandardAction<
  "loadInitialDataSuccess"
>("loadInitialDataSuccess")<Payload>()

export const loadInitialDataReducer = (
  state: TodoAppState,
  { payload: { todoList } }: { payload: Payload }
): TodoAppState =>
  produce(state, (draftState: Draft<TodoAppState>) => {
    draftState.todoList.byId = todoList
    draftState.todoList.allIds = _.toArray(_.map(todoList, todo => todo.id))
    draftState.loading = false
  })
