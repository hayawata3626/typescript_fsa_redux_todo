import { AppState } from "./store"

/* todoAppState　*/
export const todoAppStateSelector = (state: AppState) => state.todoApp

/* todoLis　*/
export const todoListSelector = (state: AppState) => state.todoApp.todoList
