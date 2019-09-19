import * as React from "react"
import { useDispatch } from "react-redux"
import { useCallback } from "react"
import { TodoItem } from "../component/TodoItem"
import { Todo } from "../state/todoAppState"
import { changeSelect, changeTodoTitle, deleteTodo } from "../reducer"
import { selectTodoItem } from "../reducer/selectTodoItem"

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

  const handleItemSelect = useCallback(
    (id: number, selected: boolean) => {
      dispatch(selectTodoItem({ id: id, selected: selected }))
    },
    [dispatch]
  )

  const handleDeleteIconClick = useCallback(
    versionId => {
      dispatch(deleteTodo({ id: versionId }))
    },
    [dispatch]
  )

  return (
    <TodoItem
      todo={todo}
      onChangeTitle={handleTitleChange}
      onItemSelect={handleItemSelect}
      onCheckedChange={handleCheckedChange}
      onDeleteIconClick={handleDeleteIconClick}
    />
  )
}
