import * as React from "react"
import { Todo } from "../state/todoAppState"
import {
  TextField,
  Card,
  Checkbox,
  Typography,
  Button
} from "@material-ui/core"
import { useCallback } from "react"

type Props = {
  todo: Todo

  onChangeTitle: (id: number, text: string) => void
  onCheckedChange: (id: number, selected: boolean) => void
  onRequestButtonClick: () => void
}

export const TodoItem = ({
  todo,
  onChangeTitle,
  onCheckedChange,
  onRequestButtonClick
}: Props) => {
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

  const handleRequestButtonClick = useCallback(() => {
    onRequestButtonClick()
  }, [])

  return (
    <Card>
      <Checkbox checked={todo.selected} onChange={handleCheckedChange} />
      <TextField
        type={"text"}
        value={todo.title}
        onChange={handleTitleChange}
      />
      <Typography>{todo.done ? "完了" : "未完了"}</Typography>
      <Button onClick={handleRequestButtonClick}>通信する</Button>
    </Card>
  )
}
