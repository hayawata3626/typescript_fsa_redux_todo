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
import { getCandidateOfTodoList } from "./thunk/loadTodoList"
import {
  loadTodoListStart,
  loadTodoListStartReducer
} from "./loadTodoListStart"
import {
  loadTodoListSuccess,
  loadTodoListSuccessReducer
} from "./loadTodoListSuccess"
import { loadTodoListFailureReducer } from "./loadTodoListFailure"

export * from "./changeTaskTitle"
export * from "./changeSelect"
export * from "./openBulkEditModal"
export * from "./closeBulkEditModal"
export * from "./changeTitleOfBulkEditModal"
export * from "./checkedChangeOfBulkEditModal"
export * from "./decideBulkModal"
export * from "./thunk/loadTodoList"

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
// .case(getCandidateOfTodoList.async.failed, loadTodoListFailureReducer)
