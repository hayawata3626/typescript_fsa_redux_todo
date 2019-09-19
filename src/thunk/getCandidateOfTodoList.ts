import { Dispatch } from "redux"
import { loadTodoListStart } from "../reducer/loadTodoListStart"
import { loadTodoListSuccess } from "../reducer/loadTodoListSuccess"
import { changeTodoTitle } from "../reducer/changeTaskTitle"
import { loadTodoListFailure } from "../reducer/loadTodoListFailure"

type Payload = {
  id: number
  title: string
}

export const getCandidateOfTodoList = ({ id, title }: Payload) => async (
  dispatch: Dispatch
) => {
  dispatch(changeTodoTitle({ id: id, title: title }))
  try {
    dispatch(loadTodoListStart({}))
    dispatch(loadTodoListSuccess({ todoId: id })) // TODO: 消す
  } catch (e) {
    dispatch(loadTodoListFailure({ message: e.toString() }))
  }
}
