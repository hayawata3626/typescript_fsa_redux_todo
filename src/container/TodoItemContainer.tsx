import * as React from "react"
import { useDispatch } from "react-redux"
import { useCallback } from "react"
import { TodoItem } from "../component/TodoItem"
import { Todo } from "../state/todoAppState"
import { changeSelect, changeTodoTitle } from "../reducer"
import axios, { AxiosResponse } from "axios"
import { Dispatch } from "redux"
import { loadTodoListStart } from "../reducer/loadTodoListStart"
import { loadTodoListSuccess } from "../reducer/loadTodoListSuccess"

type Props = Readonly<{
  todo: Todo
}>

export const getPosts = () => {
  return async (dispatch: Dispatch) => {
    dispatch(loadTodoListStart({}))
    const { data }: AxiosResponse = await axios.get(
      " http://localhost:3001/todoList"
    )
    dispatch(loadTodoListSuccess({ candidateOfTodoList: data }))
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
