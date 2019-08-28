import React, { useCallback } from "react"
import { TodoList } from "./component/TodoList"
import { useDispatch, useSelector } from "react-redux"
import {
  bulkEditModalSelector,
  selectedTodoIdsSelector,
  todoListSelector
} from "./selector"
import _ from "lodash"
import AppBar from "@material-ui/core/AppBar"
import { Button, Toolbar } from "@material-ui/core"
import { BulkEditModal } from "./component/BulkEditModal"
import { todoAppActions } from "./actions/todoAppActions"

const App: React.FC = () => {
  const dispatch = useDispatch()
  const todoList = useSelector(todoListSelector)
  const selectedTodoIds = useSelector(selectedTodoIdsSelector)
  const bulkEditModal = useSelector(bulkEditModalSelector)

  const handleBulkEditButtonClick = useCallback(() => {
    dispatch(todoAppActions.openBulkEditModal({}))
  }, [])

  const handleCloseButtonClick = useCallback(() => {
    dispatch(todoAppActions.closeBulkEditModal({}))
  }, [])

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
        onRequestClose={handleCloseButtonClick}
      />
    </div>
  )
}

export default App
