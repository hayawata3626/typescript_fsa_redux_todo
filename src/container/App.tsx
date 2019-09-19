import React, { useCallback, useEffect } from "react"
import { TodoList } from "../component/TodoList"
import { useDispatch, useSelector } from "react-redux"
import {
  bulkEditModalSelector,
  errorSnackBarSelector,
  loadingSelector,
  openAddTodoModalSelector,
  selectedTodoIdsSelector,
  taskFilterSelector,
  todoListSelector
} from "../selector"
import _ from "lodash"
import AppBar from "@material-ui/core/AppBar"
import {
  Button,
  CircularProgress,
  Fab,
  FormControlLabel,
  Switch,
  Toolbar
} from "@material-ui/core"
import { BulkEditModal } from "../component/BulkEditModal"
import {
  changeTaskFilter,
  changeTitleOfBulkEditModal,
  checkedChangeOfBulkEditModal,
  closeAddTodoModal,
  closeBulkEditModal,
  decideBulkModal,
  loadInitialData,
  openAddTodoModal,
  openBulkEditModal
} from "../reducer"
import { ErrorSnackBar } from "../component/ErrorSnackBar"
import AddIcon from "@material-ui/icons/Add"
import { AddTodoModal } from "../component/AddTodoModal"
import { changeTitleOfAddTodoModal } from "../reducer/changeTitleOfAddTodoModal"
import { decideAddTodo } from "../reducer/decideAddTodo"
import { FilterType } from "../state/todoAppState"

export const App: React.FC = () => {
  const dispatch = useDispatch()
  const todoList = useSelector(todoListSelector)
  const loading = useSelector(loadingSelector)
  const selectedTodoIds = useSelector(selectedTodoIdsSelector)
  const bulkEditModal = useSelector(bulkEditModalSelector)
  const errorSnackBar = useSelector(errorSnackBarSelector)
  const addTodoModal = useSelector(openAddTodoModalSelector)
  const filterType = useSelector(taskFilterSelector)

  useEffect(() => {
    ;(async () => {
      await dispatch(loadInitialData())
    })()
  }, [dispatch])

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
    checked => {
      dispatch(checkedChangeOfBulkEditModal({ checked: checked }))
    },
    [dispatch]
  )

  const handleDecide = useCallback(() => {
    dispatch(decideBulkModal({}))
  }, [dispatch])

  const handleAddTodoModalDecideButtonClick = useCallback(() => {
    dispatch(decideAddTodo({}))
  }, [dispatch])

  const handleAddTodoModalRequestClose = useCallback(() => {
    dispatch(closeAddTodoModal({}))
  }, [dispatch])

  const addTodoButtonClick = useCallback(() => {
    dispatch(openAddTodoModal({}))
  }, [dispatch])

  const handleTitleOfAddTodoModalChange = useCallback(
    (title: string) => {
      dispatch(changeTitleOfAddTodoModal({ title }))
    },
    [dispatch]
  )

  const handleChangeTaskFilter = useCallback(
    (e: any) => {
      const value = Number(e.target.value)
      dispatch(changeTaskFilter({ filterType: value }))
    },
    [dispatch]
  )

  return (
    <div className="App">
      <Fab
        color="primary"
        aria-label="add"
        style={{ position: "fixed", bottom: "10px", right: "20px" }}
      >
        <AddIcon onClick={addTodoButtonClick} />
      </Fab>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <TodoList
            filterType={filterType}
            todoList={_.toArray(todoList.byId)}
          />
          <AppBar position="fixed">
            <Toolbar>
              <Button color="inherit" onClick={handleBulkEditButtonClick}>
                一括編集
              </Button>
              <div>
                <FormControlLabel
                  control={
                    <Switch
                      checked={filterType === FilterType.All}
                      onChange={handleChangeTaskFilter}
                      value={FilterType.All}
                    />
                  }
                  label={"全て"}
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={filterType === FilterType.Active}
                      onChange={handleChangeTaskFilter}
                      value={FilterType.Active}
                    />
                  }
                  label={"未着手"}
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={filterType === FilterType.Complete}
                      onChange={handleChangeTaskFilter}
                      value={FilterType.Complete}
                    />
                  }
                  label={"完了"}
                />
              </div>
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
          <AddTodoModal
            open={addTodoModal.open}
            title={addTodoModal.title}
            onTitleChange={handleTitleOfAddTodoModalChange}
            onClickDecideButton={handleAddTodoModalDecideButtonClick}
            onRequestClose={handleAddTodoModalRequestClose}
          />
          <ErrorSnackBar
            open={errorSnackBar.open}
            message={errorSnackBar.message}
          />
        </>
      )}
    </div>
  )
}
