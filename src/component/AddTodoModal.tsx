import * as React from "react"
import {
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  TextField,
  Typography
} from "@material-ui/core"
import { useCallback } from "react"

type Props = {
  open: boolean
  title: string

  onTitleChange: (title: string) => void
  onClickDecideButton: () => void
  onRequestClose: () => void
}
export const AddTodoModal = ({
  open,
  title,
  onTitleChange,
  onClickDecideButton,
  onRequestClose
}: Props) => {
  const handleDecideButtonClick = useCallback(() => {
    onClickDecideButton()
  }, [])

  const handleBackGroundClick = useCallback(() => {}, [])

  const handleDialogContentClick = useCallback(e => {
    e.stopPropagation()
  }, [])

  const handleTextChange = useCallback(e => {
    onTitleChange(e.target.value)
  }, [])

  return (
    <Dialog open={open} onClick={handleBackGroundClick}>
      <DialogContent onClick={handleDialogContentClick}>
        <TextField
          placeholder={"タイトルをクリック"}
          value={title}
          onChange={handleTextChange}
        />
        <Button color={"secondary"} onClick={handleDecideButtonClick}>
          決定
        </Button>
      </DialogContent>
    </Dialog>
  )
}
