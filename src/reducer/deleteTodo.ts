import actionCreatorFactory from "typescript-fsa"
import { Todo, TodoAppState } from "../state/todoAppState"
import produce from "immer"
import _ from "lodash"
import { fromArrayToObject } from "../util/fromArrayToObject"

type Payload = {
  id: number
}

export const deleteTodo = actionCreatorFactory()<Payload>("deleteTodo")

export const deleteTodoReducer = (
  state: TodoAppState,
  { id }: Payload
): TodoAppState =>
  produce(state, (draftState: TodoAppState) => {
    const arrayOfTodo: ReadonlyArray<Todo> = _.toArray(draftState.todoList.byId)
    draftState.todoList.byId = fromArrayToObject(
      _.remove(arrayOfTodo, todo => {
        return todo.id !== id
      })
    )
    draftState.todoList.allIds = _.remove(
      draftState.todoList.allIds,
      todoId => todoId !== id
    )
  })
