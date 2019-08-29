import * as React from "react"
import { BulkEditModal as BulkEditModalType } from "../state/todoAppState"
import {
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  TextField
} from "@material-ui/core"
import { useCallback } from "react"

type Props = {
  bulkEditModal: BulkEditModalType
  onChangeTitle: (text: string) => void
  onChecked: (checked: boolean) => void
  onRequestClose: () => void
  onClickDecideButton: () => void
}

export const BulkEditModal = ({
  bulkEditModal,
  onChangeTitle,
  onChecked,
  onRequestClose,
  onClickDecideButton
}: Props) => {
  const handleBackGroundClick = useCallback(() => {
    onRequestClose()
  }, [])

  const handleDialogContentClick = useCallback((e: React.ChangeEvent<{}>) => {
    e.stopPropagation()
  }, [])

  const handleTextChange = useCallback((e: any) => {
    onChangeTitle(e.target.value)
  }, [])

  const handleCheckBoxChecked = useCallback((e: any, checked: boolean) => {
    onChecked(checked)
  }, [])

  const handleDecideButtonClick = useCallback(() => {
    onClickDecideButton()
  }, [])

  return (
    <Dialog open={bulkEditModal.open} onClick={handleBackGroundClick}>
      <DialogContent onClick={handleDialogContentClick}>
        <TextField
          placeholder={"タイトルをクリック"}
          onChange={handleTextChange}
        />
        <div>
          完了
          <Checkbox
            checked={bulkEditModal.done}
            onChange={handleCheckBoxChecked}
          />
        </div>
        <Button color={"secondary"} onClick={handleDecideButtonClick}>
          決定
        </Button>
      </DialogContent>
    </Dialog>
  )
}
