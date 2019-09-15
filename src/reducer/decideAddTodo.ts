import actionCreatorFactory from "typescript-fsa"
import { TodoAppState } from "../state/todoAppState"
import _ from "lodash"

type Payload = {}

export const decideAddTodo = actionCreatorFactory()<Payload>("decideAddTodo")

export const decideAddTodoReducer = (
  state: TodoAppState,
  {  }: Payload
): TodoAppState => {
  const addTodoId = _.takeRight(state.todoList.allIds)[0] + 1
  const title = state.addTodoModal.title
  return {
    ...state,
    todoList: {
      ...state.todoList,
      byId: {
        ...state.todoList.byId,
        [addTodoId]: {
          id: addTodoId,
          title: title,
          done: false,
          selected: false,
          candidateOfTodoList: []
        }
      },
      allIds: [...state.todoList.allIds, addTodoId]
    },
    addTodoModal: {
      ...state.addTodoModal,
      open: false,
      title: ""
    }
  }
}
