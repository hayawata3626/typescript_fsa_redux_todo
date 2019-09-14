import { TodoById } from "../../state/todoAppState"
import { TodoJsonModel } from "../../../api"
import { fetchInitialData } from "../../network/todoApp"
import { AxiosResponse } from "axios"
import { Dispatch } from "redux"
import { fromArrayToObject } from "../../util/fromArrayToObject"
import { loadInitialDataStart } from "../loadInitialDataStart"
import { loadInitialDataSuccess } from "../loadInitialDataSuccess"
import { loadTodoListFailure } from "../loadTodoListFailure"

export const loadInitialData = () => async (dispatch: Dispatch) => {
  dispatch(loadInitialDataStart({}))
  try {
    const { data }: AxiosResponse = await fetchInitialData()
    const todoList: TodoById = fromArrayToObject(
      data.map((todo: TodoJsonModel) => ({
        id: todo.id,
        title: todo.body,
        done: false,
        selected: false,
        candidateOfTodoList: []
      }))
    )
    dispatch(loadInitialDataSuccess({ todoList: todoList }))
  } catch (e) {
    console.error(e)
    dispatch(loadTodoListFailure({ message: e.toString() }))
  }
}
