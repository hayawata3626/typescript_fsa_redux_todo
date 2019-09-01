import React, { useCallback } from "react"
import { TodoList } from "../component/TodoList"
import { useDispatch, useSelector } from "react-redux"
import {
  bulkEditModalSelector,
  selectedTodoIdsSelector,
  todoListSelector
} from "../selector"
import _ from "lodash"
import AppBar from "@material-ui/core/AppBar"
import { Button, Toolbar } from "@material-ui/core"
import { BulkEditModal } from "../component/BulkEditModal"
import {
  changeTitleOfBulkEditModal,
  checkedChangeOfBulkEditModal,
  closeBulkEditModal,
  decideBulkModal,
  openBulkEditModal
} from "../reducer"

const App: React.FC = () => {
  const dispatch = useDispatch()
  const todoList = useSelector(todoListSelector)
  const selectedTodoIds = useSelector(selectedTodoIdsSelector)
  const bulkEditModal = useSelector(bulkEditModalSelector)

  const handleBulkEditButtonClick = useCallback(() => {
    dispatch(openBulkEditModal({}))
  }, [dispatch])

  const handleCloseButtonClick = useCallback(() => {
    dispatch(closeBulkEditModal({}))
  }, [dispatch])

  const handleTitleChange = useCallback(
    text => {
      dispatch(changeTitleOfBulkEditModal({ text: text }))
    },
    [dispatch]
  )

  const handleCheckedChange = useCallback(
    selected => {
      dispatch(checkedChangeOfBulkEditModal({ selected: selected }))
    },
    [dispatch]
  )

  const handleDecide = useCallback(() => {
    dispatch(decideBulkModal({}))
  }, [dispatch])

  return (
    <div className="App">
      <TodoList todoList={_.toArray(todoList.byId)} />
      <AppBar position="sticky">
        <Toolbar>
          <Button color="inherit" onClick={handleBulkEditButtonClick}>
            一括編集
          </Button>
        </Toolbar>
      </AppBar>
      <BulkEditModal
        bulkEditModal={bulkEditModal}
        onChangeTitle={handleTitleChange}
        onChecked={handleCheckedChange}
        onRequestClose={handleCloseButtonClick}
        onClickDecideButton={handleDecide}
      />
    </div>
  )
}

export default App
