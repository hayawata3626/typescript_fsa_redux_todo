import {
  BulkEditModal,
  Todo,
  TodoAppState,
  TodoById
} from "../state/todoAppState"
import _ from "lodash"
import { fromArrayToObject } from "../util/fromArrayToObject"
import actionCreatorFactory from "typescript-fsa"

type Payload = {}

export const decideBulkModal = actionCreatorFactory()<Payload>(
  "decideBulkModal"
)

export const decideBulkModalReducer = (state: TodoAppState): TodoAppState => ({
  ...state,
  todoList: {
    ...state.todoList,
    byId: changeSelectedTodo(
      state.selectedTodoIds,
      _.toArray(state.todoList.byId),
      state.bulkEditModal
    )
  },
  bulkEditModal: {
    ...state.bulkEditModal,
    open: false,
    title: "",
    done: false
  }
})

const changeSelectedTodo = (
  selectedIds: ReadonlyArray<number>,
  todoList: ReadonlyArray<Todo>,
  bulkEditModal: BulkEditModal
): Readonly<TodoById> =>
  fromArrayToObject(
    _.map(todoList, (todo: Todo) =>
      _.includes(selectedIds, todo.id)
        ? {
            ...todo,
            title: bulkEditModal.title,
            done: bulkEditModal.done
          }
        : todo
    )
  )
