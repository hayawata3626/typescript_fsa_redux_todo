import * as React from "react"
import { BulkEditModal as BulkEditModalType } from "../state/todoAppState"
import { Checkbox, Dialog, TextField } from "@material-ui/core"
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
  return (
    <Dialog open={bulkEditModal.open} onClick={handleBackGroundClick}>
      <TextField placeholder={"タイトルをクリック"} />
      <Checkbox />
    </Dialog>
  )
}
