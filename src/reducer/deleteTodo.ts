import { Todo, TodoAppState } from "../state/todoAppState"
import produce from "immer"
import _ from "lodash"
import { fromArrayToObject } from "../util/fromArrayToObject"
import { deprecated } from "typesafe-actions"
const { createStandardAction } = deprecated

type Payload = {
  id: number
}

export const deleteTodo = createStandardAction("deleteTodo")<Payload>()

export const deleteTodoReducer = (
  state: TodoAppState,
  { payload: { id } }: { payload: Payload }
): TodoAppState =>
  produce(state, (draftState: TodoAppState) => {
    const arrayOfTodo: ReadonlyArray<Todo> = _.toArray(draftState.todoList.byId)
    draftState.todoList.byId = fromArrayToObject(
      _.filter(arrayOfTodo, todo => todo.id !== id)
    )
    draftState.todoList.allIds = _.filter(
      draftState.todoList.allIds,
      todoId => todoId !== id
    )
  })
