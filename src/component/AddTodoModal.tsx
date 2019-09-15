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
  onClickDecideButton: () => void
  onRequestClose: () => void
}
export const AddTodoModal = ({
  open,
  title,
  onClickDecideButton,
  onRequestClose
}: Props) => {
  const handleDecideButtonClick = useCallback(() => {}, [])

  const handleBackGroundClick = useCallback(() => {}, [])

  const handleDialogContentClick = useCallback(e => {
    e.stopPropagation()
  }, [])

  const handleTextChange = useCallback(() => {}, [])

  return (
    <Dialog open={open} onClick={handleBackGroundClick}>
      <DialogContent onClick={handleDialogContentClick}>
        <TextField
          placeholder={"タイトルをクリック"}
          onChange={handleTextChange}
        />
        <Button color={"secondary"} onClick={handleDecideButtonClick}>
          決定
        </Button>
      </DialogContent>
    </Dialog>
  )
}
