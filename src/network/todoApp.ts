import axios, { AxiosResponse } from "axios"

const baseUrl = "http://localhost:4000"

/* 初期データ読み込み用 */
export const fetchInitialData = (): Promise<AxiosResponse<any>> =>
  axios.get(`${baseUrl}/todoList`)
