import * as React from "react"
import { Todo } from "../state/todoAppState"
import { TextField, Card, Checkbox } from "@material-ui/core"
import { useCallback } from "react"
import HighlightOffIcon from "@material-ui/icons/HighlightOff"

type Props = {
  todo: Todo
  onChangeTitle: (id: number, text: string) => void
  onCheckedChange: (id: number, selected: boolean) => void
  onItemSelect: (id: number, selected: boolean) => void
  onDeleteIconClick: (id: number) => void
}

export const TodoItem: React.FC<Props> = React.memo(
  ({
    todo,
    onChangeTitle,
    onCheckedChange,
    onItemSelect,
    onDeleteIconClick
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

    const handleItemSelect = useCallback(() => {
      onItemSelect(todo.id, !todo.selected)
    }, [onItemSelect, todo.id, todo.selected])

    const handleDeleteIconClick = useCallback(
      (e: React.ChangeEvent<{}>) => {
        e.stopPropagation()
        onDeleteIconClick(todo.id)
      },
      [onDeleteIconClick, todo.id]
    )

    return (
      <Card
        style={{
          margin: "0 auto 20px auto",
          width: "600px",
          border: todo.selected ? "2px solid blue" : "none",
          display: "flex",
          alignItems: "center"
        }}
        data-testid="todo"
        onClick={handleItemSelect}
      >
        <Checkbox checked={todo.done} onChange={handleCheckedChange} />
        <TextField
          type={"text"}
          value={todo.title}
          onChange={handleTitleChange}
        />
        <HighlightOffIcon color={"primary"} onClick={handleDeleteIconClick} />
      </Card>
    )
  }
)
