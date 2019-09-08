import { Dispatch } from "redux"
import { loadTodoListStart } from "../loadTodoListStart"
import axios, { AxiosResponse } from "axios"
import { loadTodoListSuccess } from "../loadTodoListSuccess"
import { changeTodoTitle } from "../changeTaskTitle"
import { loadTodoListFailure } from "../loadTodoListFailure"

type Payload = {
  id: number
  title: string
}

export const getCandidateOfTodoList = ({ id, title }: Payload) => {
  return async (dispatch: Dispatch) => {
    dispatch(changeTodoTitle({ id: id, title: title }))
    try {
      dispatch(loadTodoListStart({}))
      const { data }: AxiosResponse = await axios.get(
        " http://localhost:3001/todoLiast"
      )
      dispatch(loadTodoListSuccess({ todoId: id, candidateOfTodoList: data }))
    } catch (e) {
      dispatch(loadTodoListFailure({ message: e.toString() }))
    }
  }
}
