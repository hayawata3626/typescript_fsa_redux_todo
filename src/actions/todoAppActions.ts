import actionCreatorFactory from "typescript-fsa"

export const actionCreator = actionCreatorFactory()

export const todoAppActions = {
  changeTodoTitle: actionCreator<any>("CHANGE_TODO_TITLE"),
  changeSelect: actionCreator<any>("CHANGE_SELECT"),
  openBulkEditModal: actionCreator<{}>("OPEN_BULK_EDIT_MODAL"),
  closeBulkEditModal: actionCreator<{}>("CLOSE_BULK_EDIT_MODAL"),
  changeTitleOfBulkEditModal: actionCreator<{text: string}>("CHANGE_TITLE_OF_BULK_EDIT_MODAL"),
  checkedChangeOfBulkEditModal: actionCreator<{selected: boolean}>("CHECKED_CHANGE_OF_BULK_EDIT_MODAL")
}
