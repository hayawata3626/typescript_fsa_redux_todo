import { TodoAppState } from "./state/todoAppState"
import { applyMiddleware, combineReducers, createStore } from "redux"
import { todoReducer } from "./reducer"
import thunk from "redux-thunk"
import logger from "redux-logger"

export type AppState = {
  todoApp: TodoAppState
}

export const store = createStore(
  combineReducers<AppState>({
    todoApp: todoReducer
  }),
  applyMiddleware(thunk, logger)
)
