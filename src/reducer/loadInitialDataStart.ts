import { TodoAppState } from "../state/todoAppState"
import actionCreatorFactory from "typescript-fsa"

type Payload = {}

export const loadInitialDataStart = actionCreatorFactory()<Payload>(
  "loadInitialDataStart"
)

export const loadInitialDataStartReducer = (
  state: TodoAppState,
  {  }: Payload
): TodoAppState => ({
  ...state,
  loading: true
})
