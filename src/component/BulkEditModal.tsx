import * as React from "react"
import { BulkEditModal as BulkEditModalType } from "../state/todoAppState"
import { Checkbox, Dialog, DialogContent, TextField } from "@material-ui/core"
import { useCallback } from "react"

type Props = {
  bulkEditModal: BulkEditModalType
  onClickDecideButton?: () => void
  onRequestClose: () => void
}

export const BulkEditModal = ({ bulkEditModal, onRequestClose }: Props) => {
  const handleBackGroundClick = useCallback(() => {
    onRequestClose()
  }, [])

  const handleDialogContentClick = useCallback((e: React.ChangeEvent<{}>) => {
    e.stopPropagation()
  }, [])
  return (
    <Dialog open={bulkEditModal.open} onClick={handleBackGroundClick}>
      <DialogContent onClick={handleDialogContentClick}>
        <TextField placeholder={"タイトルをクリック"} />
        <Checkbox />
      </DialogContent>
    </Dialog>
  )
}
