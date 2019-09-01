import * as React from "react"
import { useDispatch } from "react-redux"
import { useCallback } from "react"
import { TodoItem } from "../component/TodoItem"
import { Todo } from "../state/todoAppState"
import { changeTodoTitle } from "../reducer/changeTaskTitle"
import { changeSelect } from "../reducer/changeSelect"

type Props = Readonly<{
  todo: Todo
}>

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

  return (
    <TodoItem
      todo={todo}
      onChangeTitle={handleTitleChange}
      onCheckedChange={handleCheckedChange}
    />
  )
}
