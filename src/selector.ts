import { AppState } from "./store"

/* todoAppState　*/
export const todoAppStateSelector = (state: AppState) => state.todoApp

/* todoList　*/
export const todoListSelector = (state: AppState) => state.todoApp.todoList

/* 選択されているTodoのidが格納された配列 */
export const selectedTodoIdsSelector = (state: AppState) =>
  state.todoApp.selectedTodoIds

export const bulkEditModalSelector = (state: AppState) =>
  state.todoApp.bulkEditModal
