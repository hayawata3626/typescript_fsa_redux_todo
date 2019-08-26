import * as React from "react"
import { useDispatch } from "react-redux"
import { useCallback } from "react"
import { todoAppActions } from "../actions/todoAppActions"
import { TodoItem } from "../component/TodoItem"
import { Todo } from "../state/todoAppState"

type Props = Readonly<{
  todo: Todo
}>

export const TodoItemContainer = ({ todo }: Props) => {
  const dispatch = useDispatch()

  const handleTitleChange = useCallback(
    (id: number, title: string) => {
      dispatch(todoAppActions.changeTodoTitle({ id: id, title: title }))
    },
    [dispatch]
  )

  const handleCheckedChange = useCallback(
    (id: number, selected: boolean) => {
      dispatch(todoAppActions.changeSelect({ id: id, selected: selected }))
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
