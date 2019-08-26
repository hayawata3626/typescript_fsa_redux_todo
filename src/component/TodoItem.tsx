import * as React from "react"
import { Todo } from "../states/todoAppState"
import { TextField, Card, Checkbox } from "@material-ui/core"

type Props = {
  todo: Todo

  onChangeTitle: (id: number, text: string) => void
  onCheckedChange: (id: number, selected: boolean) => void
}

export const TodoItem = ({ todo, onChangeTitle, onCheckedChange }: Props) => {
  console.log(todo.selected, "aaaaaaaaaaaaa")
  const handleTitleChange = (e: any) => {
    onChangeTitle(todo.id, e.target!.value)
  }

  const handleCheckedChange = (e: any, checked: boolean) => {
    console.log(checked, "checked")
    onCheckedChange(todo.id, checked)
  }

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
