import actionCreatorFactory from "typescript-fsa"
import { TodoAppState } from "../state/todoAppState"

type Payload = {}

export const loadTodoListStart = actionCreatorFactory()<Payload>(
  "loadTodoListStart"
)

export const loadTodoListStartReducer = (
  state: TodoAppState,
  {  }: Payload
): TodoAppState => ({
  ...state,
  loading: true
})
