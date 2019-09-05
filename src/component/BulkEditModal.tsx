import * as React from "react"
import { BulkEditModal as BulkEditModalType } from "../state/todoAppState"
import {
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  TextField,
  Typography
} from "@material-ui/core"
import { useCallback } from "react"
import _ from "lodash"

type Props = {
  bulkEditModal: BulkEditModalType
  selectedTodoIds: ReadonlyArray<number>
  onChangeTitle: (text: string) => void
  onChecked: (checked: boolean) => void
  onRequestClose: () => void
  onClickDecideButton: () => void
}

export const BulkEditModal = ({
  bulkEditModal,
  selectedTodoIds,
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
        {selectedTodoIds.map(id => (
          <Typography>{id}が選択されています</Typography>
        ))}
        {_.isEmpty(selectedTodoIds) && (
          <Typography>選択されているidはありません</Typography>
        )}
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
