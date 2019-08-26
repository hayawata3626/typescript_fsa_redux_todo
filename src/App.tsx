import React from "react"
import { TodoList } from "./component/TodoList"
import { useSelector } from "react-redux"
import { todoListSelector } from "./selector"
import _ from "lodash"

const App: React.FC = () => {
  const todoList = useSelector(todoListSelector)

  return (
    <div className="App">
      <TodoList todoList={_.toArray(todoList.byId)} />
    </div>
  )
}

export default App
