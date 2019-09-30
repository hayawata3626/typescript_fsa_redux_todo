import axios, { AxiosResponse } from "axios"

const baseUrl = "http://localhost:4000"

/* タスク候補取得用 */
export const loadCandidateOfTodoList = (): Promise<AxiosResponse<any>> =>
  axios.get(`${baseUrl}/todoList`)

/* 初期データ読み込み用 */
export const fetchInitialData = (): Promise<AxiosResponse<any>> =>
  axios.get(`${baseUrl}/todoList`)

export const fetchArticles = (): Promise<AxiosResponse<any>> =>
  axios.get(`${baseUrl}/articles`)
