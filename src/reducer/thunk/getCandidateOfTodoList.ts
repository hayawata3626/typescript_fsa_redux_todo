import { Dispatch } from "redux"
import { loadTodoListStart } from "../loadTodoListStart"
import { loadTodoListSuccess } from "../loadTodoListSuccess"
import { changeTodoTitle } from "../changeTaskTitle"
import { loadTodoListFailure } from "../loadTodoListFailure"

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
