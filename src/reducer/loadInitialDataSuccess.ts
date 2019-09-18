import actionCreatorFactory from "typescript-fsa"
import { TodoAppState, TodoById } from "../state/todoAppState"
import _ from "lodash"
import produce, { Draft } from "immer"

type Payload = {
  todoList: TodoById
}

export const loadInitialDataSuccess = actionCreatorFactory()<Payload>(
  "loadInitialDataSuccess"
)

export const loadInitialDataReducer = (
  state: TodoAppState,
  { todoList }: Payload
): TodoAppState =>
  produce(state, (draftState: Draft<TodoAppState>) => {
    draftState.todoList.byId = todoList
    draftState.todoList.allIds = _.toArray(_.map(todoList, todo => todo.id))
    draftState.loading = false
  })
