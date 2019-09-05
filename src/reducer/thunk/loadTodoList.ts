import asyncFactory from "typescript-fsa-redux-thunk"
import actionCreatorFactory from "typescript-fsa"
import { TodoAppState } from "../../state/todoAppState"
import axios from "axios"
import { loadTodoListSuccess } from "../loadTodoListSuccess"

type Payload = {}

export const create = actionCreatorFactory("examples")

export const createAsync = asyncFactory<TodoAppState>(create)

export const getCandidateOfTodoList = createAsync<any, any, any>(
  "GetCandidateOfTodoList",
  async (params, dispatch, getState) => {
    console.log("called!!!")
    console.log("thunk")
    const baseUrl = "https://api.github.com"
    const userName = "hayawata3626"
    const tokenKey = "044f805072c4db7d216690e6959625601eae6c2ba"
    const data = await axios.get(
      `${baseUrl}/users/[${userName}]?access_token=${tokenKey}`
    )
    if (!data) {
      console.log("error")
    }
    // dispatch(loadTodoListSuccess({}))
  }
)
