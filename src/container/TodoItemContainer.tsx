import * as React from "react"
import { useDispatch } from "react-redux"
import { useCallback } from "react"
import { TodoItem } from "../component/TodoItem"
import { Todo } from "../state/todoAppState"
import { changeSelect, changeTodoTitle } from "../reducer"
import axios from "axios"
import { Dispatch } from "redux"
import { loadTodoListStart } from "../reducer/loadTodoListStart"
import { loadTodoListSuccess } from "../reducer/loadTodoListSuccess"

type Props = Readonly<{
  todo: Todo
}>

export const getPosts = () => {
  return async (dispatch: Dispatch) => {
    dispatch(loadTodoListStart({}))
    const baseUrl = "https://api.github.com"
    const userName = "hayawata3626"
    const tokenKey = "044f805072c4db7d216690e6959625601eae6c2ba"
    // const data = await axios.get(
    //   `${baseUrl}/user/${userName}?access_token=${tokenKey}`,
    //   { headers: "044f805072c4db7d216690e6959625601eae6c2ba" }
    // )
    const data = await axios.get(" http://localhost:3001/todoList")
    console.log(data, "data")
    dispatch(loadTodoListSuccess({}))
  }
}

export const TodoItemContainer = ({ todo }: Props) => {
  const dispatch = useDispatch()

  const handleTitleChange = useCallback(
    (id: number, title: string) => {
      dispatch(changeTodoTitle({ id: id, title: title }))
    },
    [dispatch]
  )

  const handleCheckedChange = useCallback(
    (id: number, selected: boolean) => {
      dispatch(changeSelect({ id: id, selected: selected }))
    },
    [dispatch]
  )

  const handleRequestButtonClick = useCallback(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <TodoItem
      todo={todo}
      onChangeTitle={handleTitleChange}
      onCheckedChange={handleCheckedChange}
      onRequestButtonClick={handleRequestButtonClick}
    />
  )
}
