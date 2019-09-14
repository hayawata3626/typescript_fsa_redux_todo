import React, { useCallback, useEffect } from "react"
import { TodoList } from "../component/TodoList"
import { useDispatch, useSelector } from "react-redux"
import {
  bulkEditModalSelector,
  errorSnackBarSelector,
  loadingSelector,
  selectedTodoIdsSelector,
  todoListSelector
} from "../selector"
import _ from "lodash"
import AppBar from "@material-ui/core/AppBar"
import { Button, CircularProgress, Toolbar } from "@material-ui/core"
import { BulkEditModal } from "../component/BulkEditModal"
import {
  changeTitleOfBulkEditModal,
  checkedChangeOfBulkEditModal,
  closeBulkEditModal,
  decideBulkModal,
  openBulkEditModal
} from "../reducer"
import { ErrorSnackBar } from "../component/ErrorSnackBar"
import { fetchInitialData } from "../network/todoApp"
import { loadInitialData } from "../reducer/thunk/loadInitialData"

const App: React.FC = () => {
  const dispatch = useDispatch()
  const todoList = useSelector(todoListSelector)
  const loading = useSelector(loadingSelector)
  const selectedTodoIds = useSelector(selectedTodoIdsSelector)
  const bulkEditModal = useSelector(bulkEditModalSelector)
  const errorSnackBar = useSelector(errorSnackBarSelector)

  useEffect(() => {
    ;(async () => {
      await dispatch(loadInitialData())
    })()
  }, [])

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
        selectedTodoIds={selectedTodoIds}
        bulkEditModal={bulkEditModal}
        onChangeTitle={handleTitleChange}
        onChecked={handleCheckedChange}
        onRequestClose={handleCloseButtonClick}
        onClickDecideButton={handleDecide}
      />
      <ErrorSnackBar
        open={errorSnackBar.open}
        message={errorSnackBar.message}
      />
      {loading && <CircularProgress />}
    </div>
  )
}

export default App
