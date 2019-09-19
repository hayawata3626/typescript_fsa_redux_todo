import { TodoAppState } from "./state/todoAppState"
import { applyMiddleware, combineReducers, createStore } from "redux"
import { todoReducer } from "./reducer"
import thunk from "redux-thunk"
// import logger from "redux-logger"
import { composeWithDevTools } from "redux-devtools-extension"

export type AppState = {
  todoApp: TodoAppState
}

const middleware = [thunk]

export const store = createStore(
  combineReducers<AppState>({
    todoApp: todoReducer
  }),
  composeWithDevTools(applyMiddleware(...middleware))
)
