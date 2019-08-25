import { todoReducer, TodoAppState } from "./states/todoAppState"
import { combineReducers, createStore } from "redux"

export type AppState = {
  todoApp: TodoAppState
}

export const store = createStore(
  combineReducers<AppState>({
    todoApp: todoReducer
  }),
  (<any>window).__REDUX_DEVTOOLS_EXTENSION__ &&
    (<any>window).__REDUX_DEVTOOLS_EXTENSION__()
)
