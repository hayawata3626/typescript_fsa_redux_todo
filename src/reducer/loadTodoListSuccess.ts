import actionCreatorFactory from "typescript-fsa"
import { CandidateOfTodo, TodoAppState } from "../state/todoAppState"

type Payload = {
  todoId: number
  candidateOfTodoList: ReadonlyArray<CandidateOfTodo>
}

export const loadTodoListSuccess = actionCreatorFactory()<Payload>(
  "loadTodoListSuccess"
)

export const loadTodoListSuccessReducer = (
  state: TodoAppState,
  { todoId, candidateOfTodoList }: Payload
): TodoAppState => {
  return {
    ...state,
    todoList: {
      ...state.todoList,
      byId: {
        ...state.todoList.byId,
        [todoId]: {
          ...state.todoList.byId[todoId],
          candidateOfTodoList: candidateOfTodoList
        }
      }
    },
    loading: false
  }
}
