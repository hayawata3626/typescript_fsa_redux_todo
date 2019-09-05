import * as React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useCallback } from "react"
import { TodoItem } from "../component/TodoItem"
import { Todo } from "../state/todoAppState"
import { changeSelect, getCandidateOfTodoList } from "../reducer"

type Props = Readonly<{
  todo: Todo
}>

export const TodoItemContainer = ({ todo }: Props) => {
  const dispatch = useDispatch()

  const handleTitleChange = useCallback(
    (id: number, title: string) => {
      dispatch(getCandidateOfTodoList({ id: id, title: title }))
    },
    [dispatch]
  )

  const handleCheckedChange = useCallback(
    (id: number, selected: boolean) => {
      dispatch(changeSelect({ id: id, selected: selected }))
    },
    [dispatch]
  )

  return (
    <TodoItem
      todo={todo}
      candidateOfTodoList={todo.candidateOfTodoList}
      onChangeTitle={handleTitleChange}
      onCheckedChange={handleCheckedChange}
    />
  )
}
