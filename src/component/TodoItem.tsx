import * as React from "react"
import { Todo } from "../state/todoAppState"
import { TextField, Card, Checkbox } from "@material-ui/core"
import { useCallback } from "react"

type Props = {
  todo: Todo

  onChangeTitle: (id: number, text: string) => void
  onCheckedChange: (id: number, selected: boolean) => void
}

export const TodoItem = ({ todo, onChangeTitle, onCheckedChange }: Props) => {
  const handleTitleChange = useCallback(
    (e: any) => {
      onChangeTitle(todo.id, e.target!.value)
    },
    [todo, onChangeTitle]
  )

  const handleCheckedChange = useCallback(
    (e: any, checked: boolean) => {
      onCheckedChange(todo.id, checked)
    },
    [todo, onCheckedChange]
  )

  return (
    <Card>
      <Checkbox checked={todo.selected} onChange={handleCheckedChange} />
      <TextField
        type={"text"}
        defaultValue={todo.title}
        onChange={handleTitleChange}
      />
    </Card>
  )
}
