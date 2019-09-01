import { TodoAppState } from "./state/todoAppState"
import { combineReducers, createStore } from "redux"
import { todoReducer } from "./reducer"

export type AppState = {
  todoApp: TodoAppState
}

export const store = createStore(
  combineReducers<AppState>({
    todoApp: todoReducer
  }),
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)
