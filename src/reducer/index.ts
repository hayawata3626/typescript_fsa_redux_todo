import { reducerWithInitialState } from "typescript-fsa-reducers"
import { changeTaskTitleReducer, changeTodoTitle } from "./changeTaskTitle"
import { changeSelect, changeSelectReducer } from "./changeSelect"
import {
  openBulkEditModal,
  openBulkEditModalReducer
} from "./openBulkEditModal"
import {
  closeBulkEditModal,
  closeBulkEditModalReducer
} from "./closeBulkEditModal"
import {
  changeTitleOfBulkEditModal,
  changeTitleOfBulkEditModalReducer
} from "./changeTitleOfBulkEditModal"
import {
  checkedChangeOfBulkEditModal,
  checkedChangeOfBulkEditModalReducer
} from "./checkedChangeOfBulkEditModal"
import { decideBulkModal, decideBulkModalReducer } from "./decideBulkModal"
import { initialState } from "../state/todoAppState"
import {
  loadTodoListStart,
  loadTodoListStartReducer
} from "./loadTodoListStart"
import {
  loadTodoListSuccess,
  loadTodoListSuccessReducer
} from "./loadTodoListSuccess"
import {
  loadTodoListFailure,
  loadTodoListFailureReducer
} from "./loadTodoListFailure"
import {
  loadInitialDataReducer,
  loadInitialDataSuccess
} from "./loadInitialDataSuccess"
import {
  loadInitialDataStart,
  loadInitialDataStartReducer
} from "./loadInitialDataStart"
import {
  loadInitialDataFailure,
  loadInitialDataFailureReducer
} from "./loadInitialDataFailure"
import { openAddTodoModal, openAddTodoModalReducer } from "./openAddTodoModal"
import {
  changeTitleOfAddTodoModal,
  changeTitleOfAddTodoModalReducer
} from "./changeTitleOfAddTodoModal"
import { decideAddTodo, decideAddTodoReducer } from "./decideAddTodo"
import {
  closeAddTodoModal,
  closeAddTodoModalReducer
} from "./closeAddTodoModal"
import { selectTodoItem, selectTodoItemReducer } from "./selectTodoItem"
import { deleteTodo, deleteTodoReducer } from "./deleteTodo"
import { changeTaskFilter, changeTaskFilterReducer } from "./changeTaskFilter"

export * from "./changeTaskTitle"
export * from "./changeSelect"
export * from "./openBulkEditModal"
export * from "./closeBulkEditModal"
export * from "./changeTitleOfBulkEditModal"
export * from "./checkedChangeOfBulkEditModal"
export * from "./decideBulkModal"
export * from "../thunk/getCandidateOfTodoList"
export * from "../thunk/loadInitialData"
export * from "./loadInitialDataStart"
export * from "./loadInitialDataSuccess"
export * from "./loadInitialDataFailure"
export * from "./loadTodoListFailure"
export * from "./openAddTodoModal"
export * from "./closeAddTodoModal"
export * from "./deleteTodo"
export * from "./changeTaskFilter"

export const todoReducer = reducerWithInitialState(initialState)
  .case(changeTodoTitle, changeTaskTitleReducer)
  .case(changeSelect, changeSelectReducer)
  .case(openBulkEditModal, openBulkEditModalReducer)
  .case(closeBulkEditModal, closeBulkEditModalReducer)
  .case(changeTitleOfBulkEditModal, changeTitleOfBulkEditModalReducer)
  .case(checkedChangeOfBulkEditModal, checkedChangeOfBulkEditModalReducer)
  .case(decideBulkModal, decideBulkModalReducer)
  .case(loadTodoListStart, loadTodoListStartReducer)
  .case(loadTodoListSuccess, loadTodoListSuccessReducer)
  .case(loadTodoListFailure, loadTodoListFailureReducer)
  .case(loadInitialDataStart, loadInitialDataStartReducer)
  .case(loadInitialDataSuccess, loadInitialDataReducer)
  .case(loadInitialDataFailure, loadInitialDataFailureReducer)
  .case(openAddTodoModal, openAddTodoModalReducer)
  .case(changeTitleOfAddTodoModal, changeTitleOfAddTodoModalReducer)
  .case(decideAddTodo, decideAddTodoReducer)
  .case(closeAddTodoModal, closeAddTodoModalReducer)
  .case(selectTodoItem, selectTodoItemReducer)
  .case(deleteTodo, deleteTodoReducer)
  .case(changeTaskFilter, changeTaskFilterReducer)
