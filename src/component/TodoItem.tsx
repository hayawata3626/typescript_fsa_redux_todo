import * as React from "react"
import { Todo } from "../state/todoAppState"
import { TextField, Card, Checkbox, Typography } from "@material-ui/core"
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
    (e: React.ChangeEvent<{}>, checked: boolean) => {
      onCheckedChange(todo.id, checked)
    },
    [todo, onCheckedChange]
  )

  return (
    <Card style={{ margin: "0 auto 20px auto", width: "600px" }}>
      <Checkbox checked={todo.selected} onChange={handleCheckedChange} />
      <TextField
        type={"text"}
        value={todo.title}
        onChange={handleTitleChange}
      />
      <Typography>{todo.done ? "完了" : "未完了"}</Typography>
    </Card>
  )
}
