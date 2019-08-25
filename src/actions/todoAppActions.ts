import actionCreatorFactory from "typescript-fsa"

export const actionCreator = actionCreatorFactory()

export const todoAppActions = {
  changeTodoTitle: actionCreator<any>("CHANGE_TODO_TITLE"),
  changeSelect: actionCreator<any>("CHANGE_SELECT")
}
