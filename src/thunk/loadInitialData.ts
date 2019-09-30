import { TodoById } from "../state/todoAppState"
import { TodoJsonModel } from "../../api"
import { fetchArticles, fetchInitialData } from "../network/todoApp"
import { AxiosResponse } from "axios"
import { Dispatch } from "redux"
import { fromArrayToObject } from "../util/fromArrayToObject"
import {
  loadInitialDataStart,
  loadInitialDataSuccess,
  loadTodoListFailure
} from "../reducer"
import { normalizeData } from "../network/articleSchema"
// import { normalizeData } from "../network/articleSchema"

export const loadInitialData = () => async (dispatch: Dispatch) => {
  dispatch(loadInitialDataStart({}))
  try {
    const { data }: AxiosResponse = await fetchInitialData()

    // TODO: 以下、todoListのstateを変更次第消す
    const articles = await fetchArticles()
    const normalizedArticles = normalizeData(articles.data)
    console.log(normalizedArticles)

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
