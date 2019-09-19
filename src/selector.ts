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

export const errorSnackBarSelector = (state: AppState) =>
  state.todoApp.errorSnackBar

export const loadingSelector = (state: AppState) => state.todoApp.loading

export const openAddTodoModalSelector = (state: AppState) =>
  state.todoApp.addTodoModal

export const taskFilterSelector = (state: AppState) => state.todoApp.filterType
