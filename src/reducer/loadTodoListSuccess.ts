import actionCreatorFactory from "typescript-fsa"
import { CandidateOfTodo, TodoAppState } from "../state/todoAppState"

type Payload = {
  candidateOfTodoList: ReadonlyArray<CandidateOfTodo>
}

export const loadTodoListSuccess = actionCreatorFactory()<Payload>(
  "loadTodoListSuccess"
)

export const loadTodoListSuccessReducer = (
  state: TodoAppState,
  { candidateOfTodoList }: Payload
): TodoAppState => {
  return {
    ...state,
    loading: false,
    candidateOfTodoList: candidateOfTodoList
  }
}
